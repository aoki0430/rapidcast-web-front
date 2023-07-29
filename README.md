# rapidcast-web-front
This repository contains svelte + typescript + tailwind.css

## How to Use

### When debug
```
npm run dev
```

### When Deploy
```
docker build -t {イメージ名} ./
```
```
gcloud run deploy web-front --region "asia-northeast1" --source . --allow-unauthenticated --quiet
```
