// Additional options, checked 2026-09-21. These never replace the booked itinerary.
const foodExtras=[
  {title:'샤오롱바오·생젠·딤섬',items:[
    {ko:'자자탕바오',zh:'佳佳汤包',read:'자자 탕바오',area:'인민광장·황허루 127호',dish:'돼지고기·게살 샤오롱바오',tip:'육즙이 뜨거우니 숟가락에 올려 작은 구멍을 내고 먹기. 인기 메뉴는 일찍 소진될 수 있습니다.',search:'佳佳汤包 黄河路127号',source:'https://english.shanghai.gov.cn/en-GlobalTasteinShanghai2026-LocalFlavors/20260316/00b0c6d1698d406c8d532a6e169e1a1e.html'},
    {ko:'난샹만터우점',zh:'南翔馒头店',read:'난샹 만터우뎬',area:'예원 상가 · 豫园路87号',dish:'돼지고기·게살 샤오롱바오',tip:'예원 관광과 묶기 좋지만 줄이 길 수 있습니다. 만두 안의 뜨거운 국물을 조심하세요.',search:'南翔馒头店 豫园路87号',source:'https://english.shanghai.gov.cn/en-GlobalTasteinShanghai2026-LocalFlavors/20260316/00b0c6d1698d406c8d532a6e169e1a1e.html'},
    {ko:'샤오양셩젠',zh:'小杨生煎',read:'샤오양 성젠',area:'여러 지점 · 가까운 매장 선택',dish:'바닥이 바삭한 상하이식 생젠',tip:'간단한 아침·간식용. 입안 데지 않게 먼저 옆면을 살짝 터뜨려 드세요.',search:'小杨生煎 上海',source:'https://kr.trip.com/guide/food/%EC%83%81%ED%95%98%EC%9D%B4%2B%EC%9D%8C%EC%8B%9D.html'},
    {ko:'라이라이샤오롱',zh:'莱莱小笼',read:'라이라이 샤오룽',area:'여러 지점 · 지도에서 지점 확인',dish:'게살 샤오롱바오',tip:'게 풍미를 원할 때. 게살·돼지고기 종류와 1판 수량을 먼저 확인하세요.',search:'莱莱小笼 上海',source:'https://kr.trip.com/blog/shanghai-restaurant-recommendation-best10/'},
    {ko:'뎬두더',zh:'点都德',read:'뎬두더',area:'여러 지점 · 가까운 매장 선택',dish:'하가우·창펀·차슈바오',tip:'광둥식 딤섬을 가볍게 먹고 싶을 때. 이미 예약된 Imperial Treasure와 음식 종류가 겹칩니다.',search:'点都德 上海',source:'https://kr.trip.com/blog/shanghai-restaurant-recommendation-best10/'}
  ]},
  {title:'상하이 한 끼·면',items:[
    {ko:'위싱지 게황면',zh:'裕兴记·蟹黄面',read:'위싱지 셰황몐',area:'여러 지점 · 지도에서 지점 확인',dish:'진한 게황면',tip:'게살국수 대안입니다. 이미 넣은 장씨네 게살국수와 겹치니 둘 중 한 곳만 추천합니다.',search:'裕兴记 蟹黄面 上海',source:'https://kr.trip.com/blog/shanghai-restaurant-recommendation-best10/'},
    {ko:'후시 라오농탕 면관',zh:'沪西老弄堂面馆',read:'후시 라오눙탕 몐관',area:'여러 지점 · 지도에서 지점 확인',dish:'파기름면·상하이식 고기 국수',tip:'게 요리보다 담백한 면 한 그릇이 당길 때 좋은 후보입니다.',search:'沪西老弄堂面馆 上海',source:'https://kr.trip.com/blog/shanghai-restaurant-recommendation-best10/'},
    {ko:'라오지스',zh:'老吉士',read:'라오지스',area:'쉬후이 일대 · 지점 확인',dish:'홍샤오러우·게살두부',tip:'상하이식 달콤짭짤한 가정요리. 2인은 고기 1개와 채소 1개부터 주문하세요.',search:'老吉士 上海',source:'https://kr.trip.com/blog/shanghai-restaurant-recommendation-best10/'},
    {ko:'란신찬팅',zh:'兰心餐厅',read:'란신 찬팅',area:'황푸구 · 지점 확인',dish:'상하이식 가정요리',tip:'작은 로컬 식당 분위기. 자리와 영업시간은 지도에서 당일 확인하세요.',search:'兰心餐厅 上海',source:'https://english.shanghai.gov.cn/en-GlobalTasteinShanghai2026-LocalFlavors/20260410/1554e7ea15da4a6796e5bf8dc5cfb57f.html'},
    {ko:'셴더라이 갈비떡',zh:'鲜得来排骨年糕',read:'셴더라이 파이구 녠가오',area:'산시난루 19호 지점 등',dish:'상하이식 돼지갈비와 떡',tip:'간식과 식사 사이의 든든한 메뉴. 달콤짭짤한 소스를 곁들입니다.',search:'鲜得来排骨年糕 山西南路19号',source:'https://kr.trip.com/restaurant/china/shanghai/detail/restaurant-134118136/'},
    {ko:'둥베이런자',zh:'东北人家',read:'둥베이 런자',area:'여러 지점 · 지도에서 지점 확인',dish:'꿔바로우·동북식 물만두',tip:'한국인에게 익숙한 새콤달콤한 꿔바로우가 당길 때. 요리 양이 크니 2인은 적게 시작하세요.',search:'东北人家 上海',source:'https://kr.trip.com/blog/shanghai-restaurant-recommendation-best10/'}
  ]},
  {title:'훠궈·오리·매운맛',items:[
    {ko:'하이디라오',zh:'海底捞',read:'하이디라오',area:'여러 지점 · 가까운 매장 선택',dish:'훠궈 · 토마토탕/마라탕',tip:'맵기 조절이 걱정되면 토마토탕과 마라탕을 반반 선택. 대기·예약은 방문 지점에서 확인하세요.',search:'海底捞 上海',source:'https://kr.trip.com/guide/food/shanghai-haidilao-reservation.html'},
    {ko:'쓰지민푸',zh:'四季民福',read:'쓰지 민푸',area:'상하이 지점 확인',dish:'베이징덕',tip:'베이징덕을 다른 곳에서도 비교하고 싶을 때. 오리 반 마리 가능 여부와 대기 시간을 먼저 확인하세요.',search:'四季民福 上海 烤鸭',source:'https://kr.trip.com/blog/shanghai-restaurant-recommendation-best10/'},
    {ko:'페이다추',zh:'费大厨',read:'페이 다추',area:'여러 지점 · 가까운 매장 선택',dish:'고추돼지고기볶음·후난요리',tip:'불향과 매운맛이 강한 편입니다. 덜 맵게 원하면 不要太辣라고 말하세요.',search:'费大厨 上海',source:'https://kr.trip.com/blog/shanghai-restaurant-recommendation-best10/'},
    {ko:'카오장',zh:'烤匠',read:'카오장',area:'상하이 지점 확인',dish:'마라 생선구이',tip:'2026년 화제성이 큰 매운 생선구이 체인. 지점에 따라 대기가 길 수 있어 식사 직전 지도에서 확인하세요.',search:'烤匠 麻辣烤鱼 上海',source:'https://kr.trip.com/guide/food/shanghai-restaurant.html'}
  ]},
  {title:'디저트·베이커리',items:[
    {ko:'릴리안 베이커리',zh:'莉莲蛋挞',read:'리롄 단타',area:'난징동루·신세계성 지하 등',dish:'클래식 에그타르트',tip:'갓 구운 기본 맛부터 1~2개. 방문 지점의 재고와 영업시간을 확인하세요.',search:'莉莲蛋挞 新世界城',source:'https://kr.trip.com/moments/poi-new-world-department-store-70032961/'},
    {ko:'루시허',zh:'泸溪河',read:'루시허',area:'여러 지점 · 가까운 매장 선택',dish:'황유녠가오·버터떡',tip:'겉바속쫀한 버터떡. 따뜻할 때 먹는 편이 좋고 달게 느껴질 수 있습니다.',search:'泸溪河 黄油年糕 上海',source:'https://kr.trip.com/blog/shanghai-restaurant-recommendation-best10/'},
    {ko:'바오스푸',zh:'鲍师傅',read:'바오스푸',area:'여러 지점 · 가까운 매장 선택',dish:'버터떡·베이커리 간식',tip:'버터떡 브랜드 간 비교용. 일부 메뉴는 매장별로 다를 수 있습니다.',search:'鲍师傅 上海 黄油年糕',source:'https://kr.trip.com/blog/shanghai-restaurant-recommendation-best10/'},
    {ko:'국제반점 베이커리',zh:'国际饭店 西饼屋',read:'궈지 판뎬 시빙우',area:'인민광장 · 国际饭店',dish:'나비 모양 파이 蝴蝶酥',tip:'상하이 기념 간식으로 유명한 팔미에. 줄이 길면 포장 대기를 고려하세요.',search:'国际饭店 西饼屋 蝴蝶酥',source:'https://english.shanghai.gov.cn/en-GlobalTasteinShanghai2026-LocalFlavors/20260416/b2c7838bef6944fba895deb8a17e4698.html'},
    {ko:'선다청',zh:'沈大成',read:'선다청',area:'난징동루 636호 지점 등',dish:'상하이식 떡·전통 과자',tip:'계절 상품은 달라집니다. 9월에는 판매 중인 떡·과자를 현장에서 보고 선택하세요.',search:'沈大成 南京东路636号',source:'https://english.shanghai.gov.cn/en-GlobalTasteinShanghai2026-LocalFlavors/20260402/aa840c4f9bc742478a5e00f6e8203588.html'},
    {ko:'예런셴성',zh:'野人先生',read:'예런 셴성',area:'여러 지점 · 가까운 매장 선택',dish:'쌀맛·피스타치오 젤라또',tip:'더운 날 산책 중 디저트 후보. 쌀맛은 고소하고 피스타치오는 진한 견과 풍미입니다.',search:'野人先生 上海',source:'https://kr.trip.com/blog/shanghai-restaurant-recommendation-best10/'}
  ]},
  {title:'차·커피·마실 것',items:[
    {ko:'헤이티 Lab 2.0',zh:'喜茶 Lab 2.0',read:'시차 랩',area:'징안구 펑성리',dish:'차·젤라또·에그타르트',tip:'2026년 문을 연 복합 매장. 일반 헤이티와 다른 한정 메뉴가 있어 구경하기 좋습니다.',search:'喜茶 Lab 2.0 丰盛里',source:'https://english.shanghai.gov.cn/en-FirstStores/20260303/8b26181eff6b435ba5dd65db736aa0ab.html'},
    {ko:'패왕차지',zh:'霸王茶姬',read:'바왕 차지',area:'여러 지점 · 가까운 매장 선택',dish:'보야절현 伯牙绝弦 · 자스민 밀크티',tip:'차 향이 진한 밀크티. 단맛과 얼음 양을 주문 화면에서 확인하세요.',search:'霸王茶姬 上海',source:'https://kr.trip.com/blog/shanghai-restaurant-recommendation-best10/'},
    {ko:'아마수작',zh:'阿嬷手作',read:'아마 서우쭤',area:'여러 지점 · 가까운 매장 선택',dish:'미마슈 米麻薯 수제 밀크티',tip:'쫀득한 찹쌀 토핑이 들어가 디저트처럼 든든합니다. 2인이 한 잔 나눠 마시기도 좋습니다.',search:'阿嬷手作 上海',source:'https://kr.trip.com/blog/shanghai-restaurant-recommendation-best10/'},
    {ko:'말차왕',zh:'抹茶王',read:'모차왕',area:'상하이 지점 확인',dish:'말차 라테',tip:'2026년 SNS에서 주목받은 양 그림 라테. 장식 제공 여부는 매장·날짜별로 다를 수 있습니다.',search:'抹茶王 上海',source:'https://english.shanghai.gov.cn/en-Latest-WhatsNew/20260415/395538f95fd744a7a6c48663b51e7053.html'}
  ]}
];
