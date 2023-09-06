
function inicio() {
    const texto = document.querySelector("h1");
    const data = document.querySelector('#data').value;
    const imagem = document.querySelector("img");
    const descri = document.querySelector("p");
    

     if(data >= '2023/03/21' && data <= '2023/04/20') {
        texto.innerHTML = "aries";
        descri.innerHTML = " Mú de Áries: Demora bastante para que o Cavaleiro da Casa de Áries seja visto e ação, mas com certeza ele foi fundamental para os Cavaleiros de Bronze pois, se ele não realizasse os reparos em suas armaduras, eles não teriam chances contra os outros Cavaleiros de Ouro. Na Saga de Hades, quando ele finalmente entra em ação, Mú parece ser o mais inteligente entre os Cavaleiros de Ouro e, com certeza, se tornou um dos preferidos dos fãs.";
        imagem.setAttribute("src","img/ariess.webp");
        imagem.setAttribute("width","400px");
    }
    
   else if (data >= '2023/04/21' && data <= '2023/05/20') {
        texto.innerHTML = "touro";
        descri.innerHTML = "Aldebaran de Touro: Muito querido pelos brasileiros, Aldebaran mostrou como a mente de um cavaleiro de ouro funciona logo em sua primeira aparição. É após perder um de seus chifres em um combate contra Seiya que ele permite que os Cavaleiros de Bronze sigam adiante. É graças a ele que os acontecimentos marcantes das 12 casas se tornam possíveis. Infelizmente, na Saga de Hades ele acaba sendo morto ao defender o Santuário, cumprindo seu papel de Cavaleiro da melhor forma que podia: dando sua vida.";
        imagem.setAttribute("src","img/touroo.webp");
        imagem.setAttribute("width","400px");
    }

    
    else if (data >= '2023/05/21' && data <= '2023/06/21') {
        texto.innerHTML = "gemeos";
        imagem.setAttribute("src","img/gemeoss.webp");
        imagem.setAttribute("width","400px");
        descri.innerHTML = " Saga de Gêmeos: Ele sofre de um “distúrbio de personalidade”, sendo o responsável por gerar uma guerra que poderia até mesmo ter custado a vida de Atena. Contudo, ao se dar conta dos acontecimentos e se arrepender profundamente, ele acaba tirando a própria vida para limpar seu próprio nome. Ele pode até não aparecer em ação muitas vezes, mas Saga é o mais importante Cavaleiro dourado da história, pois funciona como principal antagonista na primeira saga em que aparece.Imagem de capa do item";
    }
    else if (data >= '2023/06/21' && data <= '2023/07/22') {
        texto.innerHTML = "cancer";
        descri.innerHTML = "Máscara da Morte de Câncer: acabou sendo derrotado por Shiryu em um duelo épico e memorável. Infelizmente, esse é um dos personagens que não tem tanto carisma e suas habilidades não são tão impressionantes se comparadas às de seus companheiros de classe alta";
        imagem.setAttribute("src","img/cancerr.webp");
        imagem.setAttribute("width","400px");
    
    }
    else if (data >= '2023/07/23' && data <= '2023/08/22') {
        texto.innerHTML = "leao";
        descri.innerHTML =  "Aioria de Leão: Um dos Cavaleiros de Ouro mais memoráveis da franquia, Aioria travou uma luta inesquecível contra o Cavaleiro de Pégaso na Casa de Leão. Assim como seu irmão - Aioros - ele já desconfiava do Mestre do Santuário, mas acabou sendo dominado por ele até que Seiya intervisse. Além de sua força, seu carisma é tanto que com certeza o seu reencontro com o irmão no Muro das Lamentações emocionou muitos fãs da série.";
        imagem.setAttribute("src","img/leaoo.webp");
        imagem.setAttribute("width","400px");
    }
    else if (data >= '2023/08/23' && data <= '2023/09/22') {
        texto.innerHTML = "virgem";
        descri.innerHTML = "Shaka de Virgem: Ele é o Cavaleiro Mais Próximo de Deus e já provou em várias situações que é o Cavaleiro de Ouro mais poderoso de sua geração. Ele possui o maior cosmo entre os Cavaleiros de Atena, chegando a até mesmo bloquear o cosmo de Saori no anime para que ela não atrapalhasse na luta de Ikki contra Shiva e Ágora. Mas é na Saga de Hades que ele se consagra como um dos grandes cavaleiros e se não fosse por ele, Atena não saberia o que fazer na Saga de Hades.";
        imagem.setAttribute("src","img/virgemm.webp");
        imagem.setAttribute("width","400px");
    }
    else if (data >= '2023/09/23' && data <= '2023/10/22') {
        texto.innerHTML = "libra";
        descri.innerHTML = "Dohko de Libra: O Mestre Ancião que conhecemos sendo o mentor de Shiryu se revelou futuramente como Dohko de Libra, extremamente poderoso e sábio. Ele é reconhecidamente um dos mais poderosos dentre os Cavaleiros de Ouro e, com toda a certeza, a revelação de que o Mestre Ancião conseguia retomar sua antiga forma para lutar foi uma das mais marcantes de toda a história.";
        imagem.setAttribute("src","img/libraa.webp");
        imagem.setAttribute("width","400px");
    }
    else if (data >= '2023/10/23' && data <= '2023/11/21') {
        texto.innerHTML = "escorpiao";
        imagem.setAttribute("src","img/escorpiaoo.webp");
        imagem.setAttribute("width","400px");
        descri.innerHTML = "Milo de Escorpião: O representante da Casa de Escorpião lutou contra Hyoga e mostrou como é um Cavaleiro Nobre. A determinação do Cavaleiro de Cisne chamou a atenção do Cavaleiro de Ouro, o que o fez permitir que Hyoga avançasse mesmo após ter sido destroçado pelo seu oponente. Além disso, o seu golpe principal - a Agulha Escarlate - é muito poderoso, pois afeta o sistema nervoso inteiro com 14 agulhas causando dores inimagináveis capazes até mesmo de levar alguém à loucura.";
    
    }
    else if (data >= '2023/11/22' && data <= '2023/12/21') {
        texto.innerHTML = "sagitario";
        descri.innerHTML = "Aioros de Sagitário: Sendo extremamente leal e determinado, Aioros de Sagitário é um exemplo de Cavaleiro. Mesmo estando ferido gravemente, ele dá o seu máximo para salvar o bebê de Atena do Mestre do Santuário e acaba sendo atacado no processo. Muitos fãs se emocionaram com os flashbacks onde ele aparece fazendo o possível para salvar a pequena Saori, além de sua armadura, mesmo sem seu controle direto, interfere em alguns acontecimentos da Saga do Santuário. É uma pena vermos tão pouco dele em ação, mas sua força é inegável.";
        imagem.setAttribute("src","img/sargitarioo.webp");
        imagem.setAttribute("width","400px");
    
    }
    else if (data >= '2023/12/22' && data <= '2023/01/20') {
        texto.innerHTML = "capricornio";
        descri.innerHTML = "Shura de Capricórnio: Apesar de ter cometido inúmeros erros, o portador da Excalibur se redimiu em sua luta contra Shiryu (que foi incrível, diga-se de passagem), onde deu sua própria vida. Ele sempre se considerou o cavaleiro mais leal a Atena, mas durante a Saga de Hades ele volta e sua atitude parece contrária, se comportando como o maior inimigo da Deusa (mas depois descobrimos que ele precisava se comportar dessa forma).";
        imagem.setAttribute("src","img/capricornioo.webp");
        imagem.setAttribute("width","400px");
    
    }
    else if (data >= '2023/01/21' && data <= '2023/02/18') {
        texto.innerHTML = "aquario";
        descri.innerHTML = " Camus de Aquário: Se não fosse por ele, Hyoga nunca teria despertado seu sétimo sentido, já que é a luta contra ele - que se enfrentaram mais de uma vez - se tornou um dos duelos mais inesquecíveis do anime. Camus é o mestre do mestre de Hyoga, então sabemos que ele é tranquilamente um guerreiro poderoso, o que fica claro na Saga do Santuário e também nos primeiros episódios da Saga de Hades.";
        imagem.setAttribute("src","img/aquarioo.webp");
        imagem.setAttribute("width","400px");
    
    }
    else if (data >= '2023/02/19' && data <= '2023/03/20') {
        texto.innerHTML = "peixes";
        imagem.setAttribute("src","img/peixess.webp");
        imagem.setAttribute("width","400px");
        descri.innerHTML = "Afrodite de Peixes: Nós acompanhamos muitas batalhas incríveis e memoráveis ao longo das casas, o que acaba causando uma certa frustração quando chegamos à casa de Peixes e nos deparamos com Afrodite enfrentando Shun, que só reforçou o poder do cavaleiro de Andrômeda e deixou o Cavaleiro de Ouro sem o devido destaque e reconhecimento. Futuramente, a Saga de Hades também não fez muita coisa por Afrodite, deixando-o como um personagem secundário entre os Cavaleiros mais poderosos.";
    
    }
    
    else {
        texto.innerHTML = "Deu ruim... =(";
    }
}
    



