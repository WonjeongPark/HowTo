# HowTo

## Personal Trainer와 Trainee를 이어주는 중개 플랫폼 입니다.

### HowTo를 만드려는 계기
`하루의 많은 시간을 책상에서 생활하는 사람들이 대부분 겪는 어깨나 허리통증` 등을 경험한 개인적인 입장에서<br>
운동을 시작하는 것만큼 어려운 것이 `운동을 해나가는 것`이라 생각합니다.<br>
**개발도 또한 그렇다는 걸 remind해보고..**<br><br>
><br>헬스장에 나가는 것 만큼 어려운 것은 헬스장에 있는 `기구 등을 올바른 방법으로 적정한 횟수`로 이용하는 것인데<br>
>힘을 주는 부위, 호흡법, 팔다리의 각도, 개개인마다 약한 부위별로 조심해야하는 방법 등..<br>
>막상 기구에 앉아도 궁금한 것 투성이가 됩니다.<br><br>

이 상황에서 결론은 런닝머신만 하고 집에 가거나, PT를 알아보는 것으로 많이 나뉩니다.<br><br>
`PT를 받아야 겠다고 결심`해도 망설이게 되는 건<br>
`누군가와 나의 몸 건강상태(근육량, 체지방량등)를 공유해야하는 것, 부담스러운 가격, 트레이너의 영업 등`의 이유입니다.<br><br>

><br>그래서 **온라인으로 미리 PT의 진행 방식, 트레이너 프로필 등을 볼 수 있는 중개플랫폼**을 만들고 싶습니다.<br>
>조금이라도 쉽게 접근할 수 있게 만들어서 많은 사람들이 올바른 방법을 배워 운동을 하고 건강을 유지하길 바랍니다.<br><br>

<br><br>

![HowToImg](https://github.com/WonjeongPark/howto/blob/8e11d129095cfcc51f9e22b2f84a3546439e4b0e/HowToImg.png?raw=true)

<br>위에서부터 아래순서로 각각 트레이너와 수강생 입장에서 로그인하자마자 보이는 화면(main)과<br>
프로필(profile 프로파일=프로필로 칭하겠습니다.)로 구분하였고,<br>
수강생 입장에서의 트레이너 프로필 목록이 트레이너 입장의 개인 프로필이고<br>
반대로 트레이너입장의 수강생리스트는 수강생의 개인 프로필이기에<br>
같은 색으로 구분하여 작성된 표입니다.<br><br>

## [예상구조](https://docs.google.com/presentation/d/19S967ZQ7yASUOyzDys5l-D6k_L6AQt2WhODyO6SyT4M/edit?usp=sharing) (클릭)
### Main 

[1차 수강생입장]<br>
>NavBar- 로고, 홈페이지이름, Board 버튼 생성 // Profile, Sign In/Out 버튼 생성<br>
          `Board` 버튼 - 게시판으로 이동 버튼. (추후 게시판 생성시)<br>
          `My Profile` - 로그인 상태라면 나의 프로필 보기, 수정으로 연결.<br>
          `Sign In/Out` - 로그인, 로그아웃 버튼.<br>
          
>Profile- 이름, 소속헬스장, 성별, 경력, PT가능날짜, 수강생평점, 더이상 보지않기버튼.<br>
          `경력`- 1년미만에서 5년이상까지 1년 단위로 선택 가능.<br>
          `PT가능날짜`- multipledatepicker사용하여 가능 날짜 수집후 표기<br>
          `더이상보지않기` -수강생 입장의 화면에서 해당 트레이너 목록에서 보이지 않기.<br>
          
>Video- 트레이너들이 올린 동영상을 이름, 소속헬스장, 영상에서 운동하게되는 주요 부위, 권장 운동량과 함께 표기.<br>
          `운동영상`-프로필 트레이너가 올린 영상 표시.<br>
          `운동부위`-영상이 목표로하는 운동 부위 <br>
          `운동횟수`-영상에 나온 운동동작의 권장량을 count와 setNum으로 표시<br>
          추후 주요 부위별 검색기능 추가<br>

### My Profile
>`수강생`- 이름,성별, 목표, 고민부위, 선호운동스타일, 원하는 기간 등 수정 및 기재. <br>
`트레이너`- 이름, 성별, 소속헬스장, 경력, PT가능날짜등록, 소개영상, 프로필사진 등 수정 및 기재.<br>
          -짧은 운동소개 동영상 업로드, 강조스티커 편집 툴.<br>

### 그 외 고려할 사항
#### 게시판
`수강생`- 양도거래<br>
`트레이너`- 1회 체험 등 이벤트행사<br>

생각나는 것들 계속 추가하기!<br>
