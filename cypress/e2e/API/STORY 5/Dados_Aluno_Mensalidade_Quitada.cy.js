describe("Usuário solicita dados da matrícula de um aluno com todas as mensalidades quitadas", () => {

    
    it("Deve retornar todos os dados da matricula do aluno , com excessão apenas da data de vencimento da mensalidade ",() => {

        cy.request({

                method: 'GET',
                url: 'http://localhost:8080/v1/matriculas/1122334',
                headers: {
                    'X-API-KEY': 'unime-qualidade-oficial2'
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
  
        })

    });

});