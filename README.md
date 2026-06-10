# Tatiana Soluções Imobiliárias — Site (estático)

Pequeno site estático para apresentação e gerenciamento (mock) de um catálogo de imóveis. Inclui uma vitrine pública e um painel administrativo simples que manipula os imóveis em memória.

## Estrutura do projeto

- `Index.html` — página principal e SPA simples (vitrine, login, painel admin, modal de contato).
- `Style.css` — estilos do site (tema escuro / dourado).
- `script.js` — lógica de frontend: renderização, CRUD em memória, modal do WhatsApp e autenticação mock.

## Requisitos

- Navegador moderno (Chrome, Firefox, Edge, Safari).
- (Opcional) Python3 para servir os arquivos localmente com um servidor HTTP simples.

## Como executar localmente

1. Abra um terminal (zsh) e navegue até a pasta do projeto:

```bash
cd /Users/silvandrobin/Documents/GitHub/Site/SiteImoboliaria
```

2. Inicie um servidor HTTP simples (opcional, mas recomendado para evitar problemas com alguns navegadores ao abrir arquivos locais):

```bash
python3 -m http.server 8000
```

3. Abra no navegador a URL:

http://localhost:8000

Você também pode abrir `Index.html` diretamente com duplo clique, porém utilizar um servidor local fornece um comportamento mais consistente.

## Uso do site

- Vitrine (Início): visualiza os imóveis cadastrados, filtra por finalidade (Venda/Aluguel) e busca por cidade/bairro ou termos no título.
- Botão "Tenho Interesse" abre um modal com um link pronto para conversar no WhatsApp (substitua o número do corretor se necessário).

### Painel Administrativo (mock)

- Para acessar o painel administrativo clique em "Painel Admin" no topo.
- Credenciais padrão (mock):
  - Usuário: `admin`
  - Senha: 

No painel administrativo é possível:
- Adicionar um novo imóvel (título, finalidade, preço, localização e URL da imagem).
- Editar um imóvel existente (botão Editar na tabela).
- Excluir um imóvel (botão Excluir na tabela).

Observações importantes:
- Os dados são mantidos apenas em memória (`script.js`) — ao recarregar a página os imóveis retornam ao estado inicial do mock. Para persistência local simples, você pode implementar `localStorage`.
- O número de WhatsApp usado para abrir conversas está definido em `script.js` na constante `TELEFONE_CORRETOR`.

## Sugestões rápidas de melhorias

- Persistir `imoveis` no `localStorage` para manter alterações após reload.
- Validar melhor campos de formulário (URL da imagem, formato de preço) e adicionar feedback visual.
- Substituir autenticação hardcoded por um fluxo mínimo seguro (backend ou token local com hash).
- Melhorar tratamento de erros ao carregar imagens (placeholder quando a URL falhar).

## Contato / Notas de desenvolvimento

O projeto é intencionalmente simples e focado em facilitar prototipagem. Se quiser que eu implemente persistência via `localStorage` ou outras melhorias, posso aplicar as mudanças e adicionar testes rápidos.
