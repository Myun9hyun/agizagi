# 빌드 스테이지: Node.js로 앱 빌드
FROM node:18.17.0 as build

WORKDIR /app

# 패키지 파일 복사 및 종속성 설치
COPY package.json package-lock.json ./
RUN npm install

# 소스 코드 복사 및 앱 빌드
COPY . .
RUN npm run build

# 제품 스테이지: Nginx 기반 이미지
FROM --platform=linux/amd64 nginx:stable-alpine

# nginx의 기본 설정 삭제하고 앱 설정 파일 복사
RUN rm -rf /etc/nginx/conf.d
COPY nginx.conf /etc/nginx/nginx.conf

# 빌드 스테이지에서 생성한 빌드 결과를 Nginx의 웹 폴더로 복사
COPY --from=build /app/build /usr/share/nginx/html

# 포트 80을 열어 웹 서버를 외부로 노출
EXPOSE 80

# Nginx 실행
CMD [ "nginx", "-g", "daemon off;" ]
