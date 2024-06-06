describe("Usuário solicita dados da matrícula de um aluno bolsista 100%", () => {

    
    it("Deve retornar os dados da matricula do aluno bolsista 100%, com excessão dos valor da mensalidade e da data de vacimento da mensalidade",() => {

        cy.request({

                method: 'GET',
                url: 'http://localhost:8080/v1/matriculas/7890123',
                headers: {
                    'X-API-KEY': 'unime-qualidade-oficial2'
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
  
        })

    });

});
