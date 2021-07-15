# 오늘 점심 뭐먹냐?


오늘은 또 뭐먹어야하나...   
이제는 음악, 운동, 요리, 먹방 등 **카테고리별로 나누어 관리하세요!**   
http://lunch-menu.shop.s3-website.ap-northeast-2.amazonaws.com/

https://www.notion.so/15-4b8716eaebb240b7a4748baaa53ed338

<br>

## 1. 제작 기간 & 팀원 소개
- 2021년 7월 9일 ~ 2021년 7월 15일
- 5인 1조 팀 프로젝트

BACK END
  + 이현수 : 회원가입 / 로그인 / 유저 토큰 인증
  + 이대성 : 메뉴 등록,수정,삭제,추천
  + 장상현 : 댓글 등록,삭제

FRONT END
  + 안지현 : 메뉴 등록,추천 /  댓글
  + 김태현 : 회원가입 / 로그인 / 유저 토큰 인증 / 메뉴 수정/삭제

<br>

## 2. 사용 기술
`Back-end`
- Node.js
- SQL with sequelize

`Front-end`
- React
- Redux


`deploy`
- AWS EC2 (Ubuntu 18.04 LTS)

<br>

## 3. 실행화면

<img src="https://user-images.githubusercontent.com/70243735/121630462-2ba5a000-cab8-11eb-8434-5ac030a5229c.gif">
자세한 영상 : https://youtu.be/K7LGtKgeIMI

<br>

## 4. 핵심기능

+ **로그인, 회원가입**   
  : JWT를 이용하여 로그인과 회원가입을 구현하였습니다.
  : bcrypt를 이용하여 암호화된 비밀번호를 DB에 저장합니다.
  
  + **메뉴 등록**   
  : 로그인 후 메뉴의 카테고리, 이름, 사진, 설명을 등록합니다.
  : '내 개시물' 페이지에서 유저가 등록한 메뉴 리스트를 볼 수 있습니다.

+ **점심 메뉴 추천**   
  : 원하는 메뉴의 카테고리를 고르면 등록되어있던 메뉴 중 카테고리가 일치하는 메뉴가 추천됩니다. 
  : 메뉴를 클릭한 후 하트 버튼을 누르면 해당 메뉴의 like가 1이 추가됩니다.
  : 메인 페이지 상단에 like 수가 많은 메뉴 순서대로 10개를 보여줍니다
  
 + **댓글**   
  : 각각의 메뉴마다 댓글을 작성할 수 있습니다.
  : 자신이 작성한 댓글은 로그인 후 수정 및 삭제 할 수 있습니다.
 

  

<br>

## 5. 개인 회고
최민서 : https://doing7.tistory.com/86   
양현정 : https://velog.io/@hyunjung/WEEK01%ED%9A%8C%EA%B3%A0%EB%A1%9D
