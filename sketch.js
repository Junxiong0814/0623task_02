var jsondata;
var ssobj=[];
function preload(){
  // 取得spreadsheet
  jsondata = loadJSON('https://spreadsheets.google.com/feeds/list/1yEiblhGVSx605JL9L3c_6kB_Pz_hSgPxRVFFTlHKrUY/od6/public/values?alt=json');
}
function setup() {
  let temp = jsondata.feed.entry;
  console.log(jsondata);
  let i = 1;
  let str='';
  
  // 把所有name的資料抓出來 排在燈箱上
  // 使用 padding 加入 圖片間的間隔
  for(let i=0;i<temp.length;i+=1){
    str += '<div class="slide-'+i+'">'+
'<img style="display:block; margin:auto;"id="'+temp[i].gsx$pic.$t+'"src="./assets/'+temp[i].gsx$pic.$t+'.jpg"class="img-fluid"></img>'+'<a href="'+jsondata.feed.entry[i].gsx$url.$t+'"target="_blank">'+
          '<p style="text-align:center;">'+jsondata.feed.entry[i].gsx$link.$t+'</p>'+
      '</a>'+
    '</div>';
              
  }
  $('#hw1').html(str);
  $('#task').html('B10835043');
   //將演算的資料 str 插入 index 裡面 id= hw1 的 tag 物件
 $('#hw1').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true
});
  
}

function draw() {
  
  
}