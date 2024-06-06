describe("Usuário solicita dados da matrícula de um aluno com mensalidade atrasada", () => {

    it("Deve retornar uma mensagem de erro",() => {

        cy.request({

                method: 'GET',
                url: 'http://localhost:8080/v1/matriculas/5566778',
                headers: {
                    'X-API-KEY': 'unime-qualidade-oficial2'
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
  
        })

    });

});
