describe("Usuário solicita dados da matrícula de um aluno bolsista 50%", () => {

    
    it("Deve retornar os dados da matricula do aluno bolsista 50%, com excessão do STATUS: 'BOLSISTA_50' ",() => {

        cy.request({

                method: 'GET',
                url: 'http://localhost:8080/v1/matriculas/1113499',
                headers: {
                    'X-API-KEY': 'unime-qualidade-oficial2'
                }
            }).then((response) => {
                expect(response.status).to.eq(200);
  
        })

    });

});
