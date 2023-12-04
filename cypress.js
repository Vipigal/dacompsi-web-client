describe('Testes do Site', () => {

  // história 1: Informações do Diretório Acadêmico na Página Inicial
  it('exibe informações do diretório acadêmico para os alunos', () => {
    cy.visit('/');
    cy.contains('Gestão Atual').should('be.visible');
    cy.get('.academic-news').should('be.visible');
    cy.get('.instagram-posts').should('be.visible');
  });

  // história 2: Customização do Site pelo Administrador
  it('permite que um administrador adicione banners, fotos e textos personalizados', () => {
    cy.visit('/login');
    cy.get('input[name="username"]').type('admin');
    cy.get('input[name="password"]').type('adminPassword');
    cy.get('form').submit();
    cy.visit('/admin/customization');
    cy.get('input[name="banner"]').attachFile('banner.jpg');
    cy.get('button').contains('Upload Banner').click();
    cy.get('input[name="imagem"]').attachFile('imagem.jpg');
    cy.get('button').contains('Upload Photo').click();
    cy.get('textarea[name="customText"]').type('Bem-vindo ao nosso site!');
    cy.get('button').contains('Save Changes').click();
    cy.contains('Bem-vindo ao nosso site!').should('be.visible');
  });

  // história 3: Compra de Produtos pelo Aluno
  it('permite que um aluno compre produtos com atributos específicos', () => {
    cy.visit('/login');
    cy.get('input[name="username"]').type('student');
    cy.get('input[name="password"]').type('studentPassword');
    cy.get('form').submit();
    cy.visit('/loja');
    cy.get('.product-card').first().click();
    cy.get('select[name="size"]').select('Médio');
    cy.get('select[name="color"]').select('Azul');
    cy.get('button').contains('Add to Cart').click();
    cy.visit('/checkout');
    cy.get('button').contains('Complete Purchase').click();
    cy.contains('Obrigado pela sua compra!').should('be.visible');
  });

  // história 4: Registro de Interesse em um Produto
  it('permite que um aluno registre interesse em um produto indisponível', () => {
    cy.visit('/login');
    cy.get('input[name="username"]').type('student');
    cy.get('input[name="password"]').type('studentPassword');
    cy.get('form').submit();
    cy.visit('/loja');
    cy.get('.product-card').contains('Indisponível').first().click();
    cy.get('button').contains('Registrar Interesse').click();
    cy.contains('Interesse Registrado').should('be.visible');
  });

  // história 5: Criação e Acesso à Conta
  it('permite que um aluno crie uma conta e acesse o histórico de pedidos e tickets', () => {
    cy.visit('/cadastro');
    cy.get('input[name="username"]').type('newstudent');
    cy.get('input[name="email"]').type('newstudent@example.com');
    cy.get('input[name="password"]').type('password123');
    cy.get('input[name="confirmPassword"]').type('password123');
    cy.get('button').contains('Create Account').click();
    cy.contains('Conta Criada com Sucesso').should('be.visible');
    cy.visit('/login');
    cy.get('input[name="username"]').type('newstudent');
    cy.get('input[name="password"]').type('password123');
    cy.get('form').submit();
    cy.visit('/meuperfil');
    cy.get('.order-history').should('be.visible');
    cy.get('.ticket-history').should('be.visible');
  });

  // história 6: Lista de Eventos Futuros
  it('exibe uma lista de eventos futuros com detalhes para os alunos', () => {
    cy.visit('/eventos');
    cy.get('.event').should('have.length.greaterThan', 0);
    cy.get('.event').first().within(() => {
      cy.get('.event-date').should('be.visible');
      cy.get('.event-time').should('be.visible');
      cy.get('.event-location').should('be.visible');
      cy.get('.event-price').should('be.visible');
    });
  });

  // história 9: Administrador ver Pedidos
  it('permite que um administrador veja todos os pedidos abertos e concluídos', () => {
    
    // Faça login como administrador
    cy.visit('/login');
    cy.get('input[name="username"]').type('admin');
    cy.get('input[name="password"]').type('adminPassword');
    cy.get('form').submit();

    // Navegue até a página de gerenciamento de pedidos
    cy.visit('/admin/orders');

    // Visualizando pedidos abertos
    cy.get('.open-orders').should('be.visible');
    cy.get('.open-orders .order').should('have.length.greaterThan', 0);

    // Visualizando pedidos concluídos
    cy.get('.completed-orders').should('be.visible');
    cy.get('.completed-orders .order').should('have.length.greaterThan', 0);
  });

});
