describe("LogIn Page", () => {
  it("should render the login page correctly", () => {
    cy.visit("http://localhost:3000/login");

    cy.get(".log-in-logo").should("be.visible");
    cy.get(".log-in-carrotIcon")
      .should("have.attr", "src")
      .and("include", ".svg");
    cy.get(".textTitle").should("contain", "PantryChef");

    cy.get('input[type="text"]').should("be.visible");
    cy.get('input[type="password"]').should("be.visible");

    cy.get(".button").should("be.visible");
  });

  it("should allow the user to type in username and password fields", () => {
    cy.visit("http://localhost:3000/login");

    cy.get('input[type="text"]').type("testuser");
    cy.get('input[type="password"]').type("password123");

    cy.get('input[type="text"]').should("have.value", "testuser");
    cy.get('input[type="password"]').should("have.value", "password123");
  });

  it("should log in successfully with valid credentials", () => {
    cy.intercept("POST", "http://localhost:5000/api/auth/login", {
      statusCode: 200,
      body: {
        token: "fakeToken123",
      },
    }).as("loginRequest");

    cy.visit("http://localhost:3000/login");

    cy.get('input[type="text"]').type("testuser");
    cy.get('input[type="password"]').type("password123");
    cy.get(".button").click();

    cy.wait("@loginRequest").its("response.statusCode").should("eq", 200);

    cy.url().should("eq", "http://localhost:3000/");
  });

  it("should show an error message on invalid login", () => {
    cy.intercept("POST", "http://localhost:5000/api/auth/login", {
      statusCode: 400,
      body: { message: "Невірний логін або пароль" },
    }).as("loginRequest");

    cy.visit("http://localhost:3000/login");

    cy.get('input[type="text"]').type("wronguser");
    cy.get('input[type="password"]').type("wrongpassword");
    cy.get(".button").click();

    cy.wait("@loginRequest").its("response.statusCode").should("eq", 400);

    cy.get(".errorMessage").should("contain", "Невірний логін або пароль");
  });

  it('should navigate to the signup page when clicking on "Sign up"', () => {
    cy.visit("http://localhost:3000/login");

    cy.get("u").contains("Sign up").click(); // Клік по "Sign up"

    cy.url().should("include", "/signup");
  });
});
