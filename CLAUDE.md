# Portfólio Ely Frank

## Commits

Não adicione coautoria nos commits: nada de trailer `Co-Authored-By`.

## Subir em localhost

O Node padrão do nvm é o v14, mas o Vite 5 exige Node 18 ou superior. Ative o Node 24 antes de qualquer comando:

```bash
export PATH="$HOME/.nvm/versions/node/v24.14.1/bin:$PATH"
npm run dev -- --host 127.0.0.1
```

A aplicação abre em http://127.0.0.1:5173/. Só o Vite é necessário: as partes de Express e Drizzle são sobras do Replit e não são usadas.

## Erro conhecido

Com o Node v14, `npm run dev` e `npm run build` mostram `SyntaxError: Unexpected token '??='` e terminam com **exit code 0**. O código de saída não indica a falha, e o build mantém o `dist` antigo. Se a porta 5173 não responder, confira `node -v` e o log do comando, em vez de esperar o servidor.
