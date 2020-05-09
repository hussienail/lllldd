														$(`<img src="[url=https://top4top.io/][img]https://l.top4top.io/p_1589324m21.jpg[/img][/url]" class="fr" style="width:100%;margin-top: 1px;">
`).insertBefore('.nav-tabs');
if(location.protocol!='https:'){location.protocol='https:';}

"https:"!=location.protocol&&(location.protocol="https:"),$(`<img style="width:400px;margin-bottom: 298px;" ><center><div id="asim13"><a id="asim21" href="contact.html"style="width: 62px;padding:0;height: 20px;" class="btn minix btn-primary">اتصل بنا</a><a id="asim21" href="mobile.html" style="width: 62px;padding:0;height: 20px;" class="btn minix btn-primary">التطبيق</a><a id="asim21" href="rules.html"style="width: 62px;padding:0;height: 20px;" class="btn minix btn-primary">القوانين</a><a id="asim21" href="sub.html"style="width: 62px;padding:0;height: 20px;" class="btn minix btn-primary">اشتراكات</a><a id="asim21" href="https://m7s7.com/"style="width: 85px;padding:0;height: 20px;" class="btn minix btn-primary">دردشة عراقية</a><a id="asim21" href="radioiraqna.html"style="width: 50px;padding:0;height: 20px;" class="btn minix btn-primary">راديو</a><a id="asim25"></a><a id="asim27"></a></div></div><center>`).insertBefore(".nav-tabs"),$(".nav-tabs").addClass("fl").css("width","100%"),$(".tc span[class=\"fa fl\"]").addClass("fa-check");var nopm=!0,nonot=!0;$(".hand.nosel.fl.uzr.border").css({margin:"1px 0",borderRadius:"0px"}),$('.checkbox label').html(`<input id="stealth" type="checkbox" value=""><i class="fa fa-eye-slash" aria-hidden="true"></i>`),
$(`<link rel="stylesheet" type="text/css" href="//www.fontstatic.com/f=jazeera-light,jazeera">
<link rel="stylesheet" href="https://raw.githack.com/abbose/as.js/master/nn.css">
<style>
<style>`).insertBefore('body');

													}
														catch (e){
															console.log(e)
														}
												</script>
												<script>
													function saveColor(){
														var dfsdfsdf = $('.label-primary, .btn-primary').css('background-color');
														console.log(dfsdfsdf)
														var colorLo = {bgcolor:$('.bgcolor').val(),btcolor:$('.btcolor').val(),bocolor:$('.bocolor').val(),hicolor:$('.hicolor').val()}
														localStorage.setItem('colorLo', JSON.stringify(colorLo));
														getLoColor(JSON.stringify(colorLo))
														$('.divColorLo').slideToggle();
													}
													var hexDigits = new Array
													("0","1","2","3","4","5","6","7","8","9","a","b","c","d","e","f"); 
													function rgb2hex(rgb) {
														rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
														return  hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
													}
													function hex(x) {
														return isNaN(x) ? "00" : hexDigits[(x - x % 16) / 16] + hexDigits[x % 16];
													}
													function getLoColor(c){
														var lo = localStorage.getItem('colorLo')||c;
														if(lo){
															var stLoc = localStorage.getItem('colorSt');
															var loJs = JSON.parse(lo)
															for(var i in loJs){
																$('.'+i).val(loJs[i]);
																switch(i){
																	case 'bgcolor':
																		if(loJs[i]==="000000")loJs[i] = rgb2hex($('.bg').css('background-color'))
																		break;
																	case 'btcolor':
																		if(loJs[i]==="000000")loJs[i] = rgb2hex($('.label-primary, .btn-primary').css('background-color'))
																		break;
																	case 'bocolor':
																		if(loJs[i]==="000000")loJs[i] = rgb2hex($('.border').css('border-color'))
																		break;
																	case 'hicolor':
																		if(loJs[i]==="000000")loJs[i] = rgb2hex($('.light').css('background-color'))
																		break;
																}
															}
															var aa = '<style class="colorLo">.border{border-color: #'+loJs.bocolor+'!important;} .primaryborder{border-color: #'+loJs.btcolor+'!important;} .label-primary, .btn-primary {background-color: #'+loJs.btcolor+'!important;} .light{background-color: #'+loJs.hicolor+'!important;} .bg{background-color: #'+loJs.bgcolor+';}</style>';
															if(stLoc && !c)aa = stLoc;
															localStorage.setItem('colorSt', aa);
															var loHtml = $('.colorLo')
															if(loHtml.length >0)loHtml.text($(aa).text());
															else $('head').append(aa);
														}else{
															$('.colorLo').remove();
															$('.bgcolor,.btcolor,.hicolor,.bocolor').val('000000');
															$('.bgcolor,.btcolor,.hicolor,.bocolor').css('background-color','#000000');
														}
													}
													getLoColor()
													$('.ssss').click(function(e){
														e.stopPropagation();
														$('.divColorLo').slideToggle();
													})
