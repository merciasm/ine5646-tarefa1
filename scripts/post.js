const articleItems = [
    {
      title: "Margaret Heafield",
      image: "https://img.ibxk.com.br/2015/09/01/01151911891679.jpg?w=1040",
      content: "Tá vendo essa moça da foto? Pois é. Ela trabalhou como diretora de engenharia de software para a NASA. Basicamente, foi uma das responsáveis pelo Projeto Apollo, um dos mais importantes da agência espacial."
    },
    {
      title: "Nísia Floresta Augusta",
      image: "https://img.ibxk.com.br/2015/09/01/01152259965697.jpg?w=1040",
      content: "Nísia foi a primeira brasileira a lutar pela emancipação feminina. É considerada precursora do feminismo no país, sendo também reconhecida por seu empenho em alfabetizar meninas e mulheres. Nísia Floresta também foi uma das primeiras mulheres a publicar artigos em jornais brasileiros, além de ter sido a tradutora do manifesto feminista de Mary Wollstonecraft, “Direitos das Mulheres e Injustiças dos Homens”."
    },
    {
      title: "Amelia Earhart",
      image: "https://cdn.maioresemelhores.com/imagens/amelia-earhart-cke.jpg",
      content: "Um grande símbolo da aviação. Além de ter sido a primeira mulher a voar sozinha sobre o Oceano Atlântico, Amelia também foi a primeira a receber a Cruz de Voo Distinto, a condecoração militar atribuída a atos de heroísmo ou conquista extraordinária concedida a pilotos das Forças Aéreas dos EUA. A piloto desapareceu no Oceano Pacífico enquanto fazia um voo de volta ao mundo."
    },
    {
      title: "Maria Quitéria",
      image: "https://s.ebiografia.com/img/ma/ri/maria_quitei_ria_de_jesus_medeiros.jpg",
      content: "No princípio do século XIX o Brasil teve uma militar no seu exército, uma verdadeira heroína na luta pela independência. Você já tinha ouvido falar da Maria Quitéria? Essa baiana filha de um português com uma dona de casa ficou órfã de mãe quando tinha apenas dez anos, a partir daí começou a cuidar dos seus dois irmãos e da casa. \nIndependente, Maria Quitéria gostava de montar, de caçar e de manejar armas de fogo, mas não tinha qualquer interesse pela escola. Quando soube das lutas de apoio à Independência, em 1822, pediu autorização ao pai para se alistar. O pedido foi negado. \n Ainda assim Maria Quitéria não desistiu. Com a ajuda da irmã e do cunhado, cortou o cabelo, pôs uma roupa masculina, arranjou um nome falso e se alistou voluntariamente. Quando foi descoberta pelo pai, já o major responsável por ela não deixou que a moça fosse desligada do batalhão porque tinha um comportamento exemplar. \nA jovem participou ativamente da defesa da Ilha da Maré, da Pituba, da Barra do Paraguaçu e de Itapuã. Foi um ícone de coragem e perseverança, apesar de ter morrido no anonimato. Na vida pessoal Maria Quitéria casou com um namorado antigo, um lavrador, e teve com ele uma filha."
    },
    {
      title: "Anita Garibaldi",
      image: "https://static.todamateria.com.br/upload/an/it/anita716x1024cke.jpg",
      content: "Anita Ribeiro de Jesus, conhecida como Anita Garibaldi, nasceu em Morrinhos, atual Laguna (SC). Casou-se aos 14 anos, mas abandonou o marido. Em 1839 conheceu Giuseppe Garibaldi, um italiano que fugia de uma sentença de morte na Itália. \nAnita Garibaldi se uniu a Giuseppe, com ele lutou pela implantação da república do Rio Grande e tiveram seu primeiro filho. Mais tarde, iriam para o Uruguai onde combateriam o ditador argentino Juan Manuel Rosas. Em Montevidéu, se casariam e nasceriam mais três filhos do casal. \nEm 1847, Anita Garibaldi vai para Itália saber se o marido poderia retornar ao país e com isso, ambos se juntam, em 1848. \nO casal lutaria pela unificação italiana, tentando expulsar os austríacos da região da Lombardia. Durante a campanha, porém, Anita adoece e vem a falecer.\nPor sua participação em guerras nos dois continentes, Anita Garibaldi é chamada a “Heroína dos dois Mundos”"
    }, 
    {
      title: "Bertha Lutz",
      image: "https://static.todamateria.com.br/upload/be/rt/berthaluz-cke.jpg",
      content: "Bertha Lutz nasceu no Rio de Janeiro e recebeu educação esmerada. Estudou na Sorbonne, na faculdade de Ciências e lá em Paris entrou em contato com as ideias feministas. \nVolta ao Brasil, em 1918, e trabalha como tradutora no Instituto Oswaldo Cruz junto ao seu pai, o zoólogo Adolfo Lutz. \nTorna-se a segunda mulher a prestar concurso público no Brasil, mas sua inscrição só seria aceita após uma batalha judicial. É aprovada e ingressa como secretária do Museu Nacional, do qual, anos mais tarde, seria diretora.\nBertha Lutz também desenvolveu um notável trabalho como educadora. Funda a Liga pela Emancipação Intelectual da Mulher e participa da Associação Brasileira de Educação que defendia a educação pública, laica e mista, e o ensino secundário para todos.\nAo lado de várias mulheres, consegue que o Colégio Pedro II, do Rio de Janeiro, aceite o ingresso de meninas.\nEm 1928, ingressa na Faculdade de Direito, da Universidade do Brasil para entender o lugar da mulher na legislação brasileira.\nDurante a luta pela conquista do voto feminino, participa da campanha para prefeita de Alzira Soriano Teixeira, em Lages (RN).\nEm 1935 é eleita para suplente de deputada, cargo que assume em 1936 e termina com o golpe de Estado de 1937. Desta maneira, volta a dedicar-se à ciência, organizando o acervo do pai no Instituto Oswaldo Cruz.\nBertha Lutz dá o nome a várias escolas e ruas por todo país. Em 2001, foi instituído pelo Senado brasileiro, o Diploma Mulher Cidadã Bertha Lutz. Este prêmio tem como objetivo homenagear anualmente cinco mulheres que tenham se destacado na luta dos direitos femininos no Brasil."
    }]

    articleItems.forEach(createNewItem)
  
    function createNewItem(item, index) {
        const list = document.querySelector(".body-list")
        let article = new Article(list, item)
        article.createArticle()
    }