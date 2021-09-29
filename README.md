# Linkly
Linkly is a simple Back-end application to short links.


## How to use
| METHOD | URI          | 
|--------|--------------|
| POST   | /link        |
| GET    | /{shortLink} |
| DEL    | /link        |

### Erro's code
| CODE | RESULT    |
|------|-----------| 
|0| Created        |
|1| Already exist  |
|2| {link}         |
|3| Not found      |

### Examples
```javascript
// POST -> /link
// ...
await axios.post('/link',{
  "link": "https://www.google.com/",
  "shortLink" :"goo", 
  "author": "Henry"
})
// ...
```

```javascript
// GET -> /{shortLink}
// ...
let result = await axios.get('/goo');
console.log(resul);

/* 
Output:
{
  link: "https://www.google.com/",
  shortLink: "goo",
  author: "Henry"
}*/
```

## Improviments needed
- Error handler
- Tests
- Auth
- Input sanitizing
- and so on ... 

## Avalible scripts
In this project you can:

Runs the app in the development mode.<br/>
```bash
npm run dev
```

Starting project from dist folder.<br/>
```bash
npm start
```

### Docker

Build the image:
```sh
docker build --target linkly-dev -t linkly .
```

Run the container:
```sh
docker run -p 80:3000 --mount type=bind,source="$(pwd)",target=/app linkly
```
