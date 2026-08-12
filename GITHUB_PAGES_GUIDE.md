# Guia de Deployment — GitHub Pages

## 1. Preparação no GitHub
1. Crie um repositório novo no GitHub com o nome: `nova-geracao-roleplay`
2. Copie a URL do repositório (ex.: `https://github.com/seu-usuario/nova-geracao-roleplay.git`)

## 2. Inicializar Git e fazer Push

Execute no PowerShell (na pasta `C:\Users\Usuario\Desktop\SITE NG`):

```
git init
git add .
git commit -m "Initial commit - Nova Geração Roleplay"
git branch -M main
git remote add origin https://github.com/seu-usuario/nova-geracao-roleplay.git
git push -u origin main
```

**Nota:** Substitua `seu-usuario` pelo seu username do GitHub.

## 3. Configurar GitHub Pages

1. Vá para o repositório no GitHub
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Pages**
4. Em "Source", selecione **Deploy from a branch**
5. Em "Branch", selecione `main` e `/dist` (pasta)
6. Clique em **Save**

O site estará disponível em: `https://seu-usuario.github.io/nova-geracao-roleplay/`

## 4. Atualizar o site no futuro

Quando quiser atualizar o site, execute:

```
npm run build
git add .
git commit -m "Atualização do site"
git push
```

O GitHub Pages vai detectar as mudanças e fazer o deploy automaticamente em poucos minutos.

## Troubleshooting

- Se o site não aparecer logo, espere 5-10 minutos. GitHub Pages pode demorar a fazer o deploy.
- Se a página aparecer em branco, verifique se a pasta `/dist` foi feita com sucesso (`npm run build`).
- Verifique se a branch `main` e pasta `/dist` estão configuradas nas **Pages Settings**.
