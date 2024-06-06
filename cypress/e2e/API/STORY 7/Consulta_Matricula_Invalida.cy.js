describe("Usuário solicita dados de uma matrícula que foi excluída", () => {

    
    it("Deve retornar uma mensagem de erro apos colsutar a matricula excluida ",() => {

        cy.request({

                method: 'GET',
                url: 'http://localhost:8080/v1/matriculas/1',
                headers: {
                    'X-API-KEY': 'unime-qualidade-oficial2'
                },
                failOnStatusCode: false
            }).then((response) => {
                expect(response.status).to.eq(400);
  
        })

    });

});