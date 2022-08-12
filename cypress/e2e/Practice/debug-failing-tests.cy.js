/*
  All of these tests are failing and it is your job to debug them
  to find out why.
*/
describe("Debug Failing Tests", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  it("displays the correct header text", () => {
    // case sensitive
    cy.get('[data-test="home-header"]').contains("Real World Testing Blog");
  });

  it("the post links on the homepage link to the correct posts", () => {
    cy.get('[data-test="post-link-0"]').click();
    cy.wait(2000);
    cy.location("pathname").should("eq", "/posts/ssg-ssr");
  });

  it("displays all of the posts on the homepage", () => {
    cy.get('[data-test="posts-list"]').within(($post) => {
      cy.get("a").should("have.length", 2);
    });
  });

  it("/api/posts returns a status code of 200", () => {
    // 201 is created - POST request?
    cy.request("GET", "http://localhost:3000/api/posts").then((response) => {
      expect(response.status).to.eq(200);
    });
  });
});
