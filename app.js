const places = [
  {name:'上海斯格威铂尔曼大酒店',ko:'Pullman Shanghai Central',address:'上海市黄浦区打浦路15号',tag:'호텔'},
  {name:'很久以前羊肉串（打浦路店）',ko:'Long Time Ago Mutton Chuan',address:'打浦路店',tag:'양꼬치'},
  {name:'武康大楼',ko:'우캉맨션',address:'上海市徐汇区淮海中路1850号',tag:'산책'},
  {name:'安福路',ko:'안푸루',address:'上海市徐汇区安福路',tag:'산책'},
  {name:'栋梁之家 Maison Dongliang',ko:'메종 동량',address:'上海市长宁区武夷路168号174幢',tag:'쇼핑'},
  {name:'夜上海',ko:'예상하이 · 신톈디 저녁',address:'上海市黄浦区湖滨路168号无限极荟307',tag:'저녁 1순위'},
  {name:'Il Teatro',ko:'일 테아트로 · 이탈리안 대안',address:'上海市黄浦区太仓路181弄新天地北里19号',tag:'저녁 대안'},
  {name:'The Refinery',ko:'더 리파이너리 · 그릴 대안',address:'上海市黄浦区太仓路181弄新天地北里11号',tag:'저녁 대안'},
  {name:'Green & Safe',ko:'그린 앤 세이프 · 가벼운 대안',address:'上海市黄浦区太仓路181弄新天地北里1楼22号',tag:'저녁 대안'},
  {name:'张园',ko:'장위안',address:'上海市静安区南京西路588号',tag:'야경'},
  {name:'HARMAY 話梅（新天地店）',ko:'HARMAY Xintiandi',address:'上海市黄浦区黄陂南路380号',tag:'쇼핑'},
  {name:'茉莉奶白 Molly Tea（新天地店）',ko:'Molly Tea Xintiandi',address:'上海市黄浦区兴业路123号新天地时尚I期3楼',tag:'티'},
  {name:'御宝轩（益丰·外滩源店）',ko:'Imperial Treasure Fine Chinese Cuisine',address:'上海市黄浦区北京东路99号益丰·外滩源4楼',tag:'예약'},
  {name:'外滩源',ko:'와이탄위안 / Rockbund',address:'上海市黄浦区圆明园路',tag:'빛축제'},
  {name:'庄氏隆兴面馆（浙江中路店）',ko:'장씨네 게살국수',address:'上海市黄浦区浙江中路441号',tag:'면'},
  {name:'四季民福烤鸭店（外滩外白渡桥店）',ko:'쓰지민푸 · 2일차 베이징덕 후보',address:'上海市虹口区吴淞路130号城投控股大厦辅楼3楼',tag:'저녁 후보'},
  {name:'晟永兴（外滩店）',ko:'성용싱 · 호텔 컨시어지에 예약 문의만',address:'上海市黄浦区广东路20号外滩5号5楼东侧',tag:'일정 밖 선택지'},
  {name:'外滩',ko:'와이탄 / The Bund',address:'上海市黄浦区中山东一路',tag:'야경'},
  {name:'上海浦东国际机场1号航站楼',ko:'PVG Terminal 1',address:'上海市浦东新区迎宾大道6000号',tag:'공항'}
];

// Quick Korean reading aids for names travelers may need to say aloud. Tones are omitted.
const nameReadings = [
  ['上海斯格威铂尔曼大酒店','상하이 쓰거웨이 보얼만 다지우뎬'],
  ['上海浦东国际机场','상하이 푸둥 궈지 지창'],
  ['很久以前羊肉串','헌지우이첸 양러우촨'],
  ['武康大楼','우캉 다러우'],['武康路','우캉루'],['安福路','안푸루'],
  ['栋梁之家','둥량즈자'],['夜上海','예 상하이'],
  ['张园','장위안'],['南京西路','난징 시루'],['南京东路','난징 둥루'],
  ['大壶春','다후춘'],['新天地','신톈디'],['話梅','화메이'],['茉莉奶白','모리 나이바이'],
  ['御宝轩','위바오쉬안'],['外滩源','와이탄위안'],['外滩','와이탄'],
  ['庄氏隆兴面馆','좡스 룽싱 몐관'],['四季民福','쓰지민푸'],['晟永兴','성융싱'],
  ['田子坊','톈쯔팡'],['思南路','쓰난루'],['高德地图','가오더 디투'],
  ['支付宝','즈푸바오'],['微信','웨이신'],['滴滴出行','디디 추싱'],
  ['四川中路','쓰촨 중루'],['打浦路','다푸루'],['浙江中路','저장 중루']
];
function nameReading(text){return [...new Set([...text.matchAll(/[\u3400-\u9fff]+/g)].map(match=>nameReadings.find(([chinese])=>match[0].includes(chinese))?.[1]).filter(Boolean))].join(' · ');}
const menuReadings={
  '羊肉串':'양러우촨','羊排串':'양파이촨','烤韭菜':'카오 지우차이','拍黄瓜':'파이 황과','烤馕':'카오 낭',
  '红烧肉':'훙사오러우',
  '鲜肉生煎':'셴러우 성젠','豆浆':'더우장','油条':'여우탸오',
  '笋尖鲜虾饺 ¥48':'쑨젠 셴샤자오','香菇烧卖皇 ¥48':'샹구 사오마이황','金网脆皮虾肠粉 ¥52':'진왕 추이피 샤 창펀',
  '蜜汁叉烧酥 ¥42':'미즈 차사오쑤','奶皇流沙包 ¥42':'나이황 류사바오','上海小笼包 ¥36':'상하이 샤오룽바오','腊味煎萝卜糕 ¥45':'라웨이 젠뤄보가오',
  '蟹粉拌面':'셰펀 반몐','蟹粉小笼':'셰펀 샤오룽','姜茶':'장차',
  '北京烤鸭':'베이징 카오야','鸭架汤 / 椒盐鸭架':'야자탕 / 자오옌 야자','时蔬':'스수','主食':'주스'
};
const phraseReadings={
  '请带我们去这里。':'칭 따이 워먼 취 쪄리',
  '我们有两个人。':'워먼 여우 량거 런',
  '我们有预订。':'워먼 여우 위딩',
  '可以点半只北京烤鸭吗？':'커이 뎬 반즈 베이징 카오야 마',
  '不要辣，谢谢。':'부야오 라, 셰셰',
  '可以用支付宝吗？':'커이 융 즈푸바오 마',
  '请打表。':'칭 다뱌오',
  '请帮我们叫救护车。':'칭 방 워먼 자오 지우후처',
  '我们两个人，羊肉串先来十串，不要太辣。':'워먼 량거 런, 양러우촨 셴 라이 스촨, 부야오 타이 라',
  '我们两个人，想点红烧肉和一份蔬菜。':'워먼 량거 런, 샹 뎬 훙사오러우 허 이펀 수차이',
  '鲜肉生煎一两，再来一杯豆浆。':'셴러우 성젠 이량, 짜이 라이 이베이 더우장',
  '我们主要想吃点心，请按两个人的量推荐，不要点太多。':'워먼 주야오 샹 츠 뎬신, 칭 안 량거 런 더 량 투이젠, 부야오 뎬 타이 둬',
  '蟹粉拌面一份，我们两个人分着吃。':'셰펀 반몐 이펀, 워먼 량거 런 펀저 츠',
  '我们两个人，想吃北京烤鸭。可以点半只吗？':'워먼 량거 런, 샹 츠 베이징 카오야. 커이 뎬 반즈 마'
};

const scheduleMaps = {
  '2026-09-23T08:55:00+09:00':['仁川国际机场1号航站楼','인천공항 T1 출발층'],
  '2026-09-23T11:10:00+08:00':['上海浦东国际机场1号航站楼','푸동공항 T1 → 호텔'],
  '2026-09-23T12:40:00+08:00':['很久以前羊肉串 打浦路店','헌지우이첸 양꼬치 다푸루점'],
  '2026-09-23T14:30:00+08:00':['武康大楼','우캉맨션 · 산책 시작점'],
  '2026-09-23T16:15:00+08:00':['栋梁之家 Maison Dongliang 武夷路','Maison Dongliang'],
  '2026-09-23T17:30:00+08:00':['HARMAY 話梅 新天地店','HARMAY 신톈디점'],
  '2026-09-23T18:10:00+08:00':['茉莉奶白 新天地店','Molly Tea 신톈디점'],
  '2026-09-23T18:40:00+08:00':['夜上海 湖滨路168号','예상하이 · 저녁 1순위'],
  '2026-09-23T20:30:00+08:00':['张园','장위안 · 난징시루'],
  '2026-09-24T08:30:00+08:00':['大壶春 四川中路店','다후춘 · 상하이식 아침 후보'],
  '2026-09-24T09:45:00+08:00':['外滩源','와이탄위안 · 예약 식당 주변'],
  '2026-09-24T12:00:00+08:00':['御宝轩 益丰外滩源店','Imperial Treasure · 예약 장소'],
  '2026-09-24T13:40:00+08:00':['外滩','와이탄 강변'],
  '2026-09-24T15:15:00+08:00':['庄氏隆兴面馆 浙江中路店','장씨네 게살국수'],
  '2026-09-24T16:00:00+08:00':['南京东路步行街','난징동루 보행자거리'],
  '2026-09-24T19:00:00+08:00':['四季民福烤鸭店 外滩外白渡桥店','쓰지민푸 · 베이징덕 저녁 후보'],
  '2026-09-24T20:40:00+08:00':['外滩','와이탄 야경'],
  '2026-09-25T09:30:00+08:00':['田子坊','톈즈팡 · 오전 산책'],
  '2026-09-25T12:00:00+08:00':['上海斯格威铂尔曼大酒店','Pullman Shanghai Central'],
  '2026-09-25T13:15:00+08:00':['上海浦东国际机场1号航站楼','푸동공항 T1 · 현재 위치에서 경로'],
  '2026-09-25T17:40:00+08:00':['上海浦东国际机场1号航站楼','푸동공항 T1 출발층']
};

const foodDetails = {
  '2026-09-23T12:40:00+08:00':{
    name:'헌지우이첸 양꼬치 (很久以前羊肉串)', badge:'첫날 점심 · 아직 예약하지 않음', address:'다푸루점 (打浦路店)', budget:'2인 약 ¥250~400 예상',
    intro:'상하이 도착 직후 호텔 가까이에서 먹는 양꼬치 체인입니다. 입국 시간이 흔들릴 수 있어 고정 시각 예약은 잡지 않는 일정입니다.', booking:'고정 시각 예약보다 당일 대기 확인. 입국·수하물·호텔 이동 뒤 다푸루점의 현장 대기 또는 위챗·알리페이 원격 줄서기 가능 여부를 확인하세요. 지점별 방식은 다를 수 있습니다.',
    menu:[['羊肉串','양꼬치','우선 주문'],['羊排串','양갈비 꼬치','고기 맛이 진함'],['烤韭菜','부추구이','고기 사이 곁들임'],['拍黄瓜','오이무침','입가심'],['烤馕','구운 난','마지막에 1개']],
    order:'2인은 꼬치 10~14개부터 시작하고, 채소 1개와 찬요리 1개를 더한 뒤 부족하면 추가하세요. 신톈디 저녁도 예정되어 있으므로 과식하지 않는 것이 핵심입니다.',
    phrase:'我们两个人，羊肉串先来十串，不要太辣。 · 두 명이고 양꼬치 10개부터, 너무 맵지 않게 주세요.'
  },
  '2026-09-23T18:40:00+08:00':{
    name:'예상하이 (夜上海)', badge:'1일차 18:40 계획 · 아직 예약하지 않음', address:'후빈루 168호 무한지후이 307 (湖滨路168号无限极荟307)', budget:'메뉴·가격은 방문 전 앱에서 확인',
    intro:'신톈디 쇼핑 구간 가까이에 있는 상하이 요리 식당입니다. 첫날 저녁은 지역 음식으로 채우고, 취향에 맞지 않으면 아래 대안 3곳에서 고르세요.', booking:'이 식당으로 저녁을 확정했다면 사전 예약 권장. 공식 안내에 예약 가능으로 표시됩니다. 입국 지연 가능성을 감안해 18:40 도착이 가능한지 보고 예약 시간을 정하세요. 공식 전화 +86 21 6311 2323.',
    menu:[['红烧肉','상하이식 홍샤오러우','대표 상하이 요리'],['时蔬','제철 채소','고기와 곁들이기']],
    order:'둘이라면 고기 요리 하나와 채소 하나부터 주문하세요. 다음 날 점심은 딤섬, 저녁은 베이징덕이므로 첫날 오리·딤섬은 피하는 편이 메뉴가 덜 겹칩니다. 메뉴 제공·가격·예약 여부는 당일 확인하세요.',
    phrase:'我们两个人，想点红烧肉和一份蔬菜。 · 두 명이고 홍샤오러우와 채소 한 접시를 주문하고 싶습니다.'
  },
  '2026-09-23T18:10:00+08:00':{
    name:'몰리티 신톈디점 (茉莉奶白)', badge:'1일차 음료 · 당일 주문', address:'신톈디점 (上海新天地店)', budget:'음료 가격은 매장 메뉴 기준',
    intro:'신톈디 쇼핑과 저녁 사이에 들르는 차 전문점입니다. 식사 예약 장소가 아니라 짧은 음료 휴식으로 잡았습니다.', booking:'사전 예약 필요 없음. 매장·앱의 주문 대기 시간을 확인하고, 저녁 식당 예약 시간에 늦을 것 같으면 포장하거나 생략하세요.',
    menu:[['茉莉奶白','재스민 밀크티','당일 메뉴에서 선택']],
    order:'둘이 한 잔씩 또는 한 잔을 나눠 마셔도 됩니다. 당도·얼음량은 매장 주문 화면에서 선택하세요.',
    phrase:'请问现在需要等多久？ · 지금 얼마나 기다려야 하나요?'
  },
  '2026-09-24T08:30:00+08:00':{
    name:'다후춘 (大壶春)', badge:'현지식 아침 후보 · 가볍게', address:'쓰촨중루점 (四川中路店)', budget:'2인 약 ¥40~80 예상',
    intro:'상하이식 생전(밑면을 바삭하게 구운 고기 번)을 경험하기 좋은 아침 후보입니다. 이날 점심이 딤섬이므로 맛만 보는 양으로 주문합니다.', booking:'아침에 현장 대기·영업 여부 확인. 12:00 딤섬 예약이 있으므로 줄이 길면 포장하거나 생략하세요.',
    menu:[['鲜肉生煎','고기 생전','4개 단위부터'],['豆浆','두유','1잔 공유 가능'],['油条','요우탸오·튀김빵','1개']],
    order:'生煎은 안의 뜨거운 육즙을 조심하세요. 먼저 옆면을 살짝 열어 김을 빼고 먹습니다. 두 사람 합계 생전 4~8개면 충분합니다.',
    phrase:'鲜肉生煎一两，再来一杯豆浆。 · 고기 생전 1량(보통 4개)과 두유 한 잔 주세요.'
  },
  '2026-09-24T12:00:00+08:00':{
    name:'Imperial Treasure (御宝轩)', badge:'예약 확정 · 9/24 12:00 · 2인 · Michelin 2★', address:'Yifeng Galleria 4F (北京东路99号 益丰·外滩源4楼)', budget:'딤섬 중심 2인 약 ¥350~550 예상',
    intro:'고급스러운 공간과 안정적인 서비스가 강점인 광둥식 파인다이닝입니다. 딤섬 6~7접시를 골고루 먹고 이후 게살국수를 위해 여유를 남깁니다.', booking:'예약 확정 · 2026년 9월 24일(목) 12:00 · 2명 · Yifeng Galleria. 11:40 도착은 식당 요구사항이 아니라 여행 동선을 위한 권장 시각입니다. 예약자 이름과 예약 번호가 담긴 원본 확인 화면을 제시하세요. 예약 번호·성명은 공개 웹페이지에 게시하지 않았습니다.',
    menu:[['笋尖鲜虾饺 ¥48','하가우','Must Try'],['香菇烧卖皇 ¥48','시우마이','Must Try'],['金网脆皮虾肠粉 ¥52','바삭한 새우 창펀','최우선'],['蜜汁叉烧酥 ¥42','차슈 페이스트리','추천'],['奶皇流沙包 ¥42','커스터드 번','추천'],['上海小笼包 ¥36','샤오롱바오','상하이식 비교'],['腊味煎萝卜糕 ¥45','무떡','배가 남으면']],
    order:'두 사람은 하가우, 시우마이, 바삭한 새우 창펀, 차슈 페이스트리, 커스터드 번을 기본으로 하고 1~2접시만 추가하세요. 차·서비스료와 최신 가격은 현장 메뉴 기준입니다.',
    phrase:'我们主要想吃点心，请按两个人的量推荐，不要点太多。 · 딤섬 위주로 두 명 분량을 추천해주세요. 너무 많이 주문하지 않게 해주세요.'
  },
  '2026-09-24T15:15:00+08:00':{
    name:'장씨네 게살국수 (庄氏隆兴面馆)', badge:'간식처럼 1그릇 공유', address:'저장중루 441호 (浙江中路441号)', budget:'대표 게살면 1개 + 선택 메뉴 가격은 현장 확인',
    intro:'딤섬 점심과 베이징덕 저녁 사이에 상하이 게살면을 맛보는 곳입니다. 독립된 한 끼가 아니라 두 사람이 1그릇만 공유하는 것이 일정의 핵심입니다.', booking:'현재 예약하지 않음. 15:15 전후 현장 대기를 확인하고, 저녁 식당의 확정된 방문 시간에 늦을 정도로 길면 생략하세요.',
    menu:[['蟹粉拌面','게살 비빔면','1그릇 공유'],['蟹粉小笼','게살 샤오롱바오','배가 남을 때만'],['姜茶','생강차','게 요리 곁들임']],
    order:'면과 게살 소스가 따로 나오면 먼저 면 일부에 소스를 섞어 농도를 조절하세요. 저녁에 베이징덕을 먹을 계획이므로 추가 주문은 최소화합니다.',
    phrase:'蟹粉拌面一份，我们两个人分着吃。 · 게살 비빔면 한 그릇 주세요. 두 사람이 나눠 먹겠습니다.'
  },
  '2026-09-24T19:00:00+08:00':{
    name:'쓰지민푸 외바이두차오점 (四季民福烤鸭店)', badge:'2일차 저녁 후보 · 아직 예약하지 않음', address:'우쑹루 130호 3층 (吴淞路130号城投控股大厦辅楼3楼)', budget:'가격은 예약·현장 메뉴 기준',
    intro:'베이징덕 전문점의 와이탄 북쪽 지점입니다. 난징동루 산책 뒤 이동하고 식후 와이탄 야경으로 돌아옵니다.', booking:'9월 24일(목) 19:00, 2명 자리와 베이징덕 제공 여부를 호텔 컨시어지에 확인해 달라고 부탁하세요. 인기점이라 대기 가능성이 있으며, 예약 완료 전에는 확정 일정이 아닙니다.',
    menu:[['北京烤鸭','베이징덕','반 마리 가능 여부 문의'],['时蔬','제철 채소','1접시']],
    order:'두 사람이라면 오리 반 마리 제공 여부를 먼저 확인하고 채소 1접시부터 주문하세요. 반 마리가 불가능하면 한 마리의 양과 가격을 확인한 뒤 결정하세요.',
    phrase:'我们两个人，想吃北京烤鸭。可以点半只吗？ · 두 명이고 베이징덕을 먹고 싶습니다. 반 마리 주문할 수 있나요?'
  }
};

const dayOneDinners=[
  {name:'예상하이',chinese:'夜上海',reading:'예 상하이',kind:'상하이식 · 1순위',address:'湖滨路168号无限极荟307',dish:'홍샤오러우와 채소',note:'신톈디 쇼핑 뒤 지역 음식으로 저녁. 오리·딤섬은 다음 날과 겹쳐 피하기.',search:'夜上海 湖滨路168号',source:'https://amap.com/place/B0IB7MTZDZ'},
  {name:'일 테아트로',chinese:'Il Teatro',reading:'일 테아트로',kind:'이탈리안 · 대안',address:'太仓路181弄新天地北里19号',dish:'수제 피자·파스타',note:'첫날 저녁을 편안한 이탈리안으로 바꾸고 싶을 때.',search:'Il Teatro 新天地 上海',source:'https://english.shanghai.gov.cn/en-EditorsPick-ShopinShanghai/20260123/e2d3d081256341aa8df07ff652705f5d.html'},
  {name:'더 리파이너리',chinese:'The Refinery',reading:'더 리파이너리',kind:'그릴·칵테일 · 대안',address:'太仓路181弄新天地北里11号',dish:'스테이크·버거·칵테일',note:'저녁 식사에 칵테일도 곁들이고 싶을 때.',search:'The Refinery 新天地 上海',source:'https://english.shanghai.gov.cn/en-EditorsPick-ShopinShanghai/20260123/e2d3d081256341aa8df07ff652705f5d.html'},
  {name:'그린 앤 세이프',chinese:'Green & Safe',reading:'그린 앤 세이프',kind:'가벼운 저녁 · 대안',address:'太仓路181弄新天地北里1楼22号',dish:'리소토·샐러드',note:'양꼬치 점심 뒤 저녁을 가볍게 먹고 싶을 때.',search:'Green & Safe 新天地 上海',source:'https://english.shanghai.gov.cn/en-EditorsPick-ShopinShanghai/20260123/e2d3d081256341aa8df07ff652705f5d.html'}
];

const dayRoutes = [
  {title:'1일차 전체 동선',note:'공항 → 호텔 → 우캉루 → 신톈디·저녁 → 장위안',stops:[['PVG T1','푸동공항','上海浦东国际机场1号航站楼','DiDi 50~70분'],['Pullman','호텔·짐 보관','上海斯格威铂尔曼大酒店','도보 5~10분'],['很久以前羊肉串','양꼬치','很久以前羊肉串 打浦路店','DiDi 약 20분'],['武康大楼·安福路','우캉맨션·안푸루','武康大楼','도보 산책'],['Maison Dongliang','메종 동량','栋梁之家 Maison Dongliang 武夷路','DiDi 약 20~30분'],['HARMAY 新天地','하메이 신톈디','HARMAY 話梅 新天地店','도보 약 5분'],['Molly Tea 新天地','몰리티 신톈디','茉莉奶白 上海新天地店','도보 약 5분'],['夜上海','예상하이 · 저녁','夜上海 湖滨路168号','DiDi 약 15~20분'],['张园·南京西路','장위안·난징시루','张园','DiDi → 호텔']]},
  {title:'2일차 전체 동선',note:'호텔 → 다후춘 → 와이탄위안·예약 식당 → 와이탄·난징동루',stops:[['大壶春','다후춘 아침','大壶春 四川中路店','도보 또는 짧은 DiDi'],['外滩源','와이탄위안 아침 산책','外滩源','도보 · 11:40 도착 권장'],['御宝轩','Imperial Treasure','御宝轩 益丰外滩源店','도보'],['外滩','와이탄 강변','外滩','도보 또는 짧은 DiDi'],['庄氏隆兴面馆','장씨네 게살국수','庄氏隆兴面馆 浙江中路店','도보'],['南京东路','난징동루','南京东路步行街','도보'],['四季民福','쓰지민푸 · 베이징덕','四季民福烤鸭店 外滩外白渡桥店','도보 또는 짧은 DiDi'],['外滩·外滩源','와이탄 야경·빛축제','外滩','DiDi → 호텔']]},
  {title:'3일차 전체 동선',note:'호텔 근처 산책 → 호텔 → 푸동공항',stops:[['Pullman','호텔 출발','上海斯格威铂尔曼大酒店','도보 또는 짧은 DiDi'],['田子坊·思南路','톈즈팡·쓰난루','田子坊','호텔 복귀'],['Pullman','체크아웃·점심','上海斯格威铂尔曼大酒店','13:15 출발'],['PVG T1','푸동공항 T1','上海浦东国际机场1号航站楼','DiDi 60~80분'],['MU5051','17:40 출발','上海浦东国际机场1号航站楼','20:45 인천 도착']]}
];

// Coordinates are either official Amap POI (GCJ-02) or verified address coordinates converted from WGS84.
const dayMapPoints = [
  [[121.8017619,31.1524464,'wgs'],[121.4664011,31.2062423,'wgs'],[121.468743,31.206185,'gcj'],[121.4337292,31.2062561,'wgs'],[121.427391,31.213324,'gcj'],[121.475595,31.219361,'gcj'],[121.475036,31.219069,'gcj'],[121.477836,31.220647,'gcj'],[121.460064,31.227971,'gcj']],
  [[121.4847725,31.2367029,'wgs'],[121.4841599,31.2443887,'wgs'],[121.488895,31.240436,'gcj'],[121.4876320,31.2353356,'wgs'],[121.4729059,31.2387686,'wgs'],[121.4792191,31.2391470,'wgs'],[121.490444,31.247145,'gcj'],[121.4876320,31.2353356,'wgs']],
  [[121.4664011,31.2062423,'wgs'],[121.4641036,31.2103400,'wgs'],[121.4664011,31.2062423,'wgs'],[121.8017619,31.1524464,'wgs'],[121.8017619,31.1524464,'wgs']]
];

function wgsToGcj(lon,lat){
  const a=6378245,ee=.00669342162296594323,pi=Math.PI;
  if(lon<73.66||lon>135.05||lat<3.86||lat>53.55)return [lon,lat];
  const x=lon-105,y=lat-35;
  let dLat=-100+2*x+3*y+.2*y*y+.1*x*y+.2*Math.sqrt(Math.abs(x));
  dLat+=(20*Math.sin(6*x*pi)+20*Math.sin(2*x*pi))*2/3+(20*Math.sin(y*pi)+40*Math.sin(y*pi/3))*2/3+(160*Math.sin(y*pi/12)+320*Math.sin(y*pi/30))*2/3;
  let dLon=300+x+2*y+.1*x*x+.1*x*y+.1*Math.sqrt(Math.abs(x));
  dLon+=(20*Math.sin(6*x*pi)+20*Math.sin(2*x*pi))*2/3+(20*Math.sin(x*pi)+40*Math.sin(x*pi/3))*2/3+(150*Math.sin(x*pi/12)+300*Math.sin(x*pi/30))*2/3;
  const rad=lat/180*pi,magic=1-ee*Math.sin(rad)**2,sqrt=Math.sqrt(magic);
  return [lon+dLon*180/(a/sqrt*Math.cos(rad)*pi),lat+dLat*180/((a*(1-ee))/(magic*sqrt)*pi)];
}

function renderDayMap(el,rawPoints){
  if(typeof L==='undefined'){el.textContent='지도를 불러오지 못했습니다. 새로고침하거나 Amap 앱 링크를 이용해 주세요.';return;}
  el.textContent='';
  const points=rawPoints.map(p=>{const [lon,lat]=p[2]==='wgs'?wgsToGcj(p[0],p[1]):p;return [lat,lon];});
  const map=L.map(el,{scrollWheelZoom:false,zoomControl:true,attributionControl:true});
  L.tileLayer('https://webrd{s}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}',{subdomains:['01','02','03','04'],minZoom:3,maxZoom:18,attribution:'© 高德地图'}).addTo(map);
  L.polyline(points,{color:'#b9342b',weight:4,opacity:.85,dashArray:'7 7'}).addTo(map);
  points.forEach((point,i)=>L.marker(point,{icon:L.divIcon({className:'map-pin',html:String(i+1),iconSize:[25,25],iconAnchor:[12,12]})}).addTo(map).bindPopup(`${i+1}. ${dayRoutes[Number(el.dataset.mapDay)].stops[i][1]}`));
  map.fitBounds(L.latLngBounds(points),{padding:[30,30],maxZoom:15});
  const locate=el.parentElement.querySelector('.map-locate');
  let locationMarker;
  locate.addEventListener('click',()=>{
    if(!navigator.geolocation){toast('이 기기에서 위치 확인을 지원하지 않습니다');return;}
    locate.disabled=true;
    navigator.geolocation.getCurrentPosition(position=>{
      locate.disabled=false;
      const [lon,lat]=wgsToGcj(position.coords.longitude,position.coords.latitude);
      if(locationMarker)map.removeLayer(locationMarker);
      locationMarker=L.circleMarker([lat,lon],{radius:9,color:'#fff',weight:3,fillColor:'#2674d9',fillOpacity:1}).addTo(map).bindPopup('현재 위치');
      map.setView([lat,lon],Math.max(map.getZoom(),15));locationMarker.openPopup();
    },()=>{locate.disabled=false;toast('위치를 확인할 수 없습니다. 위치 권한과 인터넷 연결을 확인해 주세요');},{enableHighAccuracy:true,timeout:12000,maximumAge:30000});
  });
}

const $ = (s, root=document) => root.querySelector(s);
const $$ = (s, root=document) => [...root.querySelectorAll(s)];
const toast = (msg) => { const el=$('#toast'); el.textContent=msg; el.classList.add('show'); clearTimeout(toast.t); toast.t=setTimeout(()=>el.classList.remove('show'),1700); };
const copy = async (text) => { try { await navigator.clipboard.writeText(text); } catch { const t=document.createElement('textarea'); t.value=text; document.body.append(t); t.select(); document.execCommand('copy'); t.remove(); } toast('복사했습니다'); };
$('#dayOneDinnerOptions').innerHTML=dayOneDinners.map((d,i)=>`<article class="dinner-option"><strong>${i===0?'추천 · ':''}${d.name} (${d.chinese})</strong><small class="reading">읽기: ${d.reading}</small><small>${d.kind}</small><p><b>주소:</b> ${d.address}</p><p><b>메뉴:</b> ${d.dish}</p><p>${d.note}</p><div class="dinner-option__actions"><a href="https://uri.amap.com/search?keyword=${encodeURIComponent(d.search)}&city=310000&view=map&src=shanghai-trip-2026&callnative=1" target="_blank" rel="noopener">고덕지도 위치·경로</a><button type="button" data-dinner-copy="${i}">이름 복사</button><a href="${d.source}" target="_blank" rel="noopener">위치·메뉴 근거</a></div></article>`).join('');
$$('[data-dinner-copy]').forEach(button=>button.addEventListener('click',()=>copy(dayOneDinners[Number(button.dataset.dinnerCopy)].chinese)));
$$('.timeline li').forEach(li=>{
  const title=$('strong',li);
  if(!title)return;
  const readings=[...title.textContent.matchAll(/[\u3400-\u9fff]+/g)].map(match=>nameReading(match[0])).filter(Boolean);
  if(readings.length)title.insertAdjacentHTML('afterend',`<small class="reading">읽기: ${[...new Set(readings)].join(' → ')}</small>`);
});
$$('.phrase-grid button').forEach(button=>{
  const chinese=$('strong',button);
  chinese.insertAdjacentHTML('afterend',`<small class="reading">읽기: ${phraseReadings[chinese.textContent]}</small>`);
});
$$('.app-card .app-title').forEach(title=>{
  const reading=nameReading(title.textContent);
  if(reading)title.insertAdjacentHTML('afterend',`<small class="reading">읽기: ${reading}</small>`);
});

const weatherUrl='https://api.open-meteo.com/v1/forecast?latitude=31.2304&longitude=121.4737&current=temperature_2m,relative_humidity_2m,weather_code,precipitation&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max&timezone=Asia%2FShanghai&forecast_days=2';
const weatherText=code=>code===0?['맑음','☀️']:code<=3?['구름','⛅']:code<=48?['안개','🌫️']:code<=67?['비','🌧️']:code<=77?['눈','🌨️']:code<=82?['소나기','🌦️']:code<=86?['눈','🌨️']:code<=99?['뇌우','⛈️']:['날씨 확인','☁️'];
let weatherFetchedAt=0,weatherLoading=false;
async function updateWeather(){
  if(weatherLoading)return;
  weatherLoading=true;
  $('#weatherRefresh').disabled=true;
  const controller=new AbortController(),timer=setTimeout(()=>controller.abort(),9000);
  try{
    const response=await fetch(weatherUrl,{cache:'no-store',signal:controller.signal});
    if(!response.ok)throw new Error(`날씨 응답 ${response.status}`);
    const data=await response.json(),current=data.current,daily=data.daily;
    if(!current||!daily||daily.time?.length<2||!Number.isFinite(current.temperature_2m))throw new Error('날씨 데이터 누락');
    const [condition,icon]=weatherText(current.weather_code);
    const day=i=>`${daily.time[i].slice(5).replace('-','/')} ${Math.round(daily.temperature_2m_max[i])}/${Math.round(daily.temperature_2m_min[i])}℃ · ${weatherText(daily.weather_code[i])[0]} · 비 ${daily.precipitation_probability_max[i]??'?'}%`;
    $('#weatherIcon').textContent=icon;
    $('#weatherSummary').textContent=`상하이 현재 ${Math.round(current.temperature_2m)}℃ · ${condition}`;
    $('#weatherDetails').textContent=`오늘 ${day(0)}\n내일 ${day(1)}`;
    $('#weatherUpdated').textContent=`상하이 ${current.time.slice(5).replace('T',' ')} 기준 · Open-Meteo 예보`;
    weatherFetchedAt=Date.now();
  }catch{
    $('#weatherIcon').textContent='☁️';
    $('#weatherSummary').textContent='실시간 날씨를 불러오지 못했습니다';
    $('#weatherDetails').textContent='인터넷 연결을 확인하거나 중국기상 날씨 페이지에서 오늘·내일 날씨를 확인하세요.';
    $('#weatherUpdated').textContent='이전에 표시된 예보를 현재 날씨로 사용하지 않습니다';
    weatherFetchedAt=0;
  }finally{
    clearTimeout(timer);weatherLoading=false;$('#weatherRefresh').disabled=false;
  }
}
$('#weatherRefresh').addEventListener('click',updateWeather);
addEventListener('online',()=>{if(Date.now()-weatherFetchedAt>15*60*1000)updateWeather();});
document.addEventListener('visibilitychange',()=>{if(!document.hidden&&Date.now()-weatherFetchedAt>30*60*1000)updateWeather();});
setInterval(()=>{if(!document.hidden&&Date.now()-weatherFetchedAt>30*60*1000)updateWeather();},30*60*1000);
updateWeather();

$$('.day').forEach((day,dayIndex)=>{
  const route=dayRoutes[dayIndex]; if(!route)return;
  const stops=route.stops.map((s,i)=>{const url=`https://uri.amap.com/search?keyword=${encodeURIComponent(s[2])}&city=310000&view=map&src=shanghai-trip-2026&callnative=1`;const reading=nameReading(s[2]);return `<li><a href="${url}" target="_blank" rel="noopener"><b>${i+1}</b><span><strong>${s[1]}</strong><small>(${s[0]})</small>${reading?`<small class="reading">${reading}</small>`:''}</span></a>${i<route.stops.length-1?`<em>↓ ${s[3]}</em>`:''}</li>`;}).join('');
  day.querySelector('header').insertAdjacentHTML('afterend',`<section class="day-route-map"><div class="day-route-map__head"><div><span>ROUTE MAP</span><strong>${route.title}</strong></div><small>${route.note}</small></div><div class="live-route-map" data-map-day="${dayIndex}" aria-label="확대·이동 가능한 ${route.title} 지도"><span class="map-loading">지도 불러오는 중…</span></div><div class="map-actions"><button type="button" class="map-locate">◎ 내 위치 보기</button><span>손가락으로 이동·확대 가능</span></div><ol>${stops}</ol><p>지도 번호가 아래 방문 순서와 같습니다. 점선은 방문 순서이며 실제 도로 경로는 아닙니다. 장소를 누르면 高德地图(Amap) 앱에서 도로 길찾기를 확인할 수 있습니다.</p></section>`);
  requestAnimationFrame(()=>renderDayMap($(`[data-map-day="${dayIndex}"]`),dayMapPoints[dayIndex]));
});

$$('.tab').forEach(btn => btn.addEventListener('click', () => {
  $$('.tab').forEach(x=>x.classList.toggle('is-active',x===btn));
  $$('.panel').forEach(x=>x.classList.toggle('is-active',x.id===btn.dataset.tab));
  window.scrollTo({top:$('.tabs').offsetTop,behavior:'smooth'});
}));

$('#placeList').innerHTML = places.map((p,i)=>`<article class="place"><div class="place__top"><button class="place__copy" data-copy-index="${i}"><strong>${p.ko}</strong><span>(${p.name})</span>${nameReading(p.name)?`<small class="reading">읽기: ${nameReading(p.name)}</small>`:''}</button><span class="place__tag">${p.tag}</span></div><p class="place__address">${p.address}</p><div class="place__actions"><button data-copy-address="${i}">주소 복사</button><a href="https://uri.amap.com/search?keyword=${encodeURIComponent(p.name)}&city=310000&view=map&src=shanghai-trip-2026&callnative=1" target="_blank" rel="noopener">Amap 앱 열기 (高德地图)</a></div></article>`).join('');
$('#foodExtraList').innerHTML=foodExtras.map(group=>`<section class="food-extra-group"><h3>${group.title} <small>${group.items.length}곳</small></h3><div class="food-extra-grid">${group.items.map(item=>{
  const mapUrl=`https://uri.amap.com/search?keyword=${encodeURIComponent(item.search)}&city=310000&view=map&src=shanghai-trip-2026&callnative=1`;
  return `<details class="food-extra-card"><summary><strong>${item.ko}</strong><span>${item.zh}</span><small class="reading">읽기: ${item.read}</small><em>${item.dish}</em></summary><div class="food-extra-card__detail"><p><b>어디:</b> ${item.area}</p><p><b>먹을 것:</b> ${item.dish}</p><p><b>방문 팁:</b> ${item.tip}</p><div class="food-extra-card__actions"><a href="${mapUrl}" target="_blank" rel="noopener">고덕지도에서 지점 보기</a><button type="button" data-extra-copy="${item.zh}">중국어 이름 복사</button><a href="${item.source}" target="_blank" rel="noopener">선정 근거</a></div></div></details>`;
}).join('')}</div></section>`).join('');
$$('[data-extra-copy]').forEach(button=>button.addEventListener('click',()=>copy(button.dataset.extraCopy)));
$$('.timeline li[data-at]').forEach(li=>{
  const item=scheduleMaps[li.dataset.at];
  if(!item)return;
  const url=`https://uri.amap.com/search?keyword=${encodeURIComponent(item[0])}&city=${item[0].includes('仁川')?'':'310000'}&view=map&src=shanghai-trip-2026&callnative=1`;
  li.querySelector('div').insertAdjacentHTML('beforeend',`<div class="route"><span>📍 ${item[1]}</span><a href="${url}" target="_blank" rel="noopener">高德地图 · Amap 위치·경로</a></div>`);
});

const foodDialog=$('#foodDialog'), foodDetail=$('#foodDetail');
function openFood(key){
  const f=foodDetails[key]; if(!f)return;
  const chinesePhrase=f.phrase.split(' · ')[0];
  foodDetail.innerHTML=`<p class="food-kicker">맛집 상세</p><h2>${f.name}</h2><small class="reading">이름 읽기: ${nameReading(f.name)}</small><span class="food-badge">${f.badge}</span><p class="food-address">📍 ${f.address}</p><p class="food-budget">예상: ${f.budget}</p><p class="food-intro">${f.intro}</p><section class="booking-note"><h3>예약·대기 안내</h3><p>${f.booking}</p></section><h3>2인 추천 주문</h3><div class="menu-list">${f.menu.map(m=>`<div><strong>${m[1]}</strong><div class="menu-chinese"><span>(${m[0]})</span>${menuReadings[m[0]]?`<small class="reading">${menuReadings[m[0]]}</small>`:''}</div><em>${m[2]}</em></div>`).join('')}</div><h3>주문 전략</h3><p>${f.order}</p><button class="order-phrase" data-phrase="${f.phrase}"><span>직원에게 보여주기 · 눌러서 복사</span><strong>${f.phrase}</strong><small class="reading">읽기: ${phraseReadings[chinesePhrase]||''}</small></button>`;
  $('.order-phrase',foodDetail).addEventListener('click',e=>copy(e.currentTarget.dataset.phrase));
  foodDialog.showModal();
}
Object.keys(foodDetails).forEach(key=>{
  const li=$(`.timeline li[data-at="${key}"]`); if(!li)return;
  const title=$('strong',li); title.classList.add('food-link'); title.tabIndex=0; title.setAttribute('role','button'); title.setAttribute('aria-label',`${title.textContent} 상세정보 열기`);
  title.insertAdjacentHTML('beforeend',' <small>맛집 상세 ›</small>');
  title.addEventListener('click',()=>openFood(key)); title.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openFood(key);}});
});
$('.food-dialog__close').addEventListener('click',()=>foodDialog.close());
foodDialog.addEventListener('click',e=>{if(e.target===foodDialog)foodDialog.close();});
$$('[data-copy-index]').forEach(b=>b.addEventListener('click',()=>copy(places[+b.dataset.copyIndex].name)));
$$('[data-copy-address]').forEach(b=>b.addEventListener('click',()=>copy(`${places[+b.dataset.copyAddress].name} ${places[+b.dataset.copyAddress].address}`)));
$$('[data-copy]').forEach(b=>b.addEventListener('click',()=>copy(b.dataset.copy)));

$$('#checklist input').forEach(input => {
  input.checked = localStorage.getItem(`shanghai-${input.dataset.key}`)==='1';
  input.addEventListener('change',()=>localStorage.setItem(`shanghai-${input.dataset.key}`,input.checked?'1':'0'));
});

function updateNetwork(){ const on=navigator.onLine; $('#networkBadge').textContent=on?'온라인':'오프라인 사용 중'; $('#networkBadge').classList.toggle('offline',!on); }
addEventListener('online',updateNetwork); addEventListener('offline',updateNetwork); updateNetwork();

function updateNext(){
  const now=Date.now(), events=$$('.timeline li[data-at]'); let next=null;
  events.forEach(el=>{ const at=new Date(el.dataset.at).getTime(); el.classList.toggle('is-past',at<now-45*60*1000); el.classList.remove('is-next'); if(at>=now-45*60*1000&&!next) next={el,at}; });
  if(next){ next.el.classList.add('is-next'); const title=$('strong',next.el).textContent; const d=new Date(next.at); const diff=next.at-now; $('#nextTitle').textContent=title; $('#nextMeta').textContent=diff>0?`${Math.max(1,Math.ceil(diff/36e5))}시간 후 · ${d.toLocaleString('ko-KR',{timeZone:'Asia/Shanghai',month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'})}`:'지금 진행할 일정'; }
  else if(now>new Date('2026-09-25T17:40:00+08:00').getTime()){ $('#nextTitle').textContent='상하이 여행 완료'; $('#nextMeta').textContent='좋은 기억만 챙겨 오세요'; }
}
updateNext(); setInterval(updateNext,60000);

if('scrollRestoration' in history)history.scrollRestoration='manual';
addEventListener('load',()=>{
  const dateParts=Object.fromEntries(new Intl.DateTimeFormat('en-US',{timeZone:'Asia/Shanghai',year:'numeric',month:'2-digit',day:'2-digit'}).formatToParts(new Date()).map(part=>[part.type,part.value]));
  const shanghaiDate=`${dateParts.year}-${dateParts.month}-${dateParts.day}`;
  requestAnimationFrame(()=>requestAnimationFrame(()=>{
    const day=$(`.day[data-trip-date="${shanghaiDate}"]`);
    if(!day){scrollTo({top:0,behavior:'instant'});return;}
    const tabsHeight=$('.tabs').getBoundingClientRect().height;
    scrollTo({top:day.getBoundingClientRect().top+scrollY-tabsHeight-8,behavior:'instant'});
  }));
});

let installPrompt;
addEventListener('beforeinstallprompt',e=>{e.preventDefault();installPrompt=e;$('#installBtn').hidden=false;});
$('#installBtn').addEventListener('click',async()=>{if(!installPrompt)return;installPrompt.prompt();await installPrompt.userChoice;installPrompt=null;$('#installBtn').hidden=true;});

$('#downloadBtn').addEventListener('click',()=>{
  const text=`상하이 2박 3일 핵심 일정\n\n9/23 08:55 MU5052 출발 → 양꼬치 → 우캉맨션·안푸루 → Maison Dongliang → 신톈디 HARMAY·Molly Tea → 예상하이(夜上海) 또는 신톈디 저녁 대안 → 장위안(선택)\n9/24 다후춘 → 와이탄위안 → 12:00 Imperial Treasure(예약 확정) → 와이탄 → 장씨네 게살국수 1그릇 공유 → 난징동루 → 19:00 쓰지민푸 베이징덕(예약 전) → 와이탄 야경\n9/25 오전 호텔 인근 → 13:15 호텔 출발 → 17:40 MU5051 귀국\n\n긴급전화 경찰 110 · 구급 120 · 소방 119`;
  const a=document.createElement('a'); a.href=URL.createObjectURL(new Blob([text],{type:'text/plain;charset=utf-8'})); a.download='상하이_핵심일정.txt'; a.click(); URL.revokeObjectURL(a.href);
});

if('serviceWorker' in navigator) addEventListener('load',()=>navigator.serviceWorker.register('./sw.js',{updateViaCache:'none'}).then(reg=>reg.update()));
