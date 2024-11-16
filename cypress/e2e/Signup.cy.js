describe("SignUp Page", () => {
  it("should render the sign-up page correctly", () => {
    cy.visit("http://localhost:3000/signup");

    cy.get(".sign-up-logo").should("be.visible");
    cy.get(".sign-up-carrotIcon")
      .should("have.attr", "src")
      .and("include", ".svg");
    cy.get(".textTitle").should("contain", "PantryChef");

    // Перевіряємо наявність полів для вводу даних
    cy.get('input[type="text"]').should("be.visible");
    cy.get('input[type="password"]').should("be.visible");

    // Перевіряємо наявність кнопки "Next"
    cy.get(".button").should("be.visible");
  });

  it("should allow the user to type in username and password fields", () => {
    cy.visit("http://localhost:3000/signup");

    cy.get('input[type="text"]').type("testuser");
    cy.get('input[type="password"]').type("password123");

    cy.get('input[type="text"]').should("have.value", "testuser");
    cy.get('input[type="password"]').should("have.value", "password123");
  });

  it("should register successfully with valid credentials", () => {
    cy.intercept("POST", "http://localhost:5000/api/auth/register", {
      statusCode: 200,
      body: {
        message: "User registered successfully",
      },
    }).as("registerRequest");

    cy.visit("http://localhost:3000/signup");

    cy.get('input[type="text"]').type("testuser");
    cy.get('input[type="password"]').type("password123");
    cy.get(".button").click();

    cy.wait("@registerRequest").its("response.statusCode").should("eq", 200);

    cy.url().should("eq", "http://localhost:3000/login");
  });

  it('should navigate to the login page when clicking on "Log in"', () => {
    cy.visit("http://localhost:3000/signup");

    cy.get(".text2 u").contains("Log in").click(); // Клік по "Log in"

    // Перевірка, що URL змінився на сторінку логіну
    cy.url().should("include", "/login");
  });
});
