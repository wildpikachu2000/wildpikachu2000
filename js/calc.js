

function update_pp() {
	var y1 = document.getElementById("year1");
	var y2 = document.getElementById("year2");

	var year1 = y1.options[y1.selectedIndex].text;
	var year2 = y2.options[y2.selectedIndex].text;

	var amount = document.getElementById('amount').value;
	var table = document.getElementById('messageTable');

	var year1_cell = table.rows[0].cells[0];
	var year2_cell = table.rows[0].cells[2];
	year1_cell.firstChild.data = year1 + "年";
	year2_cell.firstChild.data = year2 + "年";

	var nbsc_amount1_cell = table.rows[1].cells[0];
	var imf_amount1_cell = table.rows[2].cells[0];
	var nbsc_amount2_cell = table.rows[1].cells[2];
	var imf_amount2_cell = table.rows[2].cells[2];

	if(cpi['NBSC'].hasOwnProperty(year1) && cpi['NBSC'].hasOwnProperty(year2)) {
		nbsc_amount1_cell.firstChild.data = amount + "元";
		nbsc_amount2_cell.firstChild.data = convert_pp(amount, cpi['NBSC'][year1], cpi['NBSC'][year2]) + "元";
	} else {
		if(!cpi['NBSC'].hasOwnProperty(year1)) {
			nbsc_amount1_cell.firstChild.data = "无数据";	
		}
		if(!cpi['NBSC'].hasOwnProperty(year2)) {
			nbsc_amount2_cell.firstChild.data = "无数据";	
		}
	}

	if(cpi['IMF'].hasOwnProperty(year1) && cpi['IMF'].hasOwnProperty(year2)) {
		imf_amount1_cell.firstChild.data = amount + "元";
		imf_amount2_cell.firstChild.data = convert_pp(amount, cpi['IMF'][year1], cpi['IMF'][year2]) + "元";
	} else {
		if(!cpi['IMF'].hasOwnProperty(year1)) {
			imf_amount1_cell.firstChild.data = "无数据";	
		}
		if(!cpi['IMF'].hasOwnProperty(year2)) {
			imf_amount2_cell.firstChild.data = "无数据";	
		}
	}
}


function convert_pp(year1_amount, year1_cpi, year2_cpi) {
	year1_amount = Number(year1_amount);
	year1_cpi = Number(year1_cpi);
	year2_cpi = Number(year2_cpi);

	return (year1_amount * year2_cpi / year1_cpi).toFixed(2);
}

function update_amount() {
	var amount = document.getElementById('amount').value;
	if(!isNaN((amount))) {
		// show tooltip
		update_pp();
	}
}


/////////////////////////////
/////// update value on load 
////////////////////////////

window.onload = update_pp;


///////////////////////////
///////// CPI data ////////
//////////////////////////

var cpi = {
// CPI data from National Bureau of Statistics of China
// url: http://data.stats.gov.cn/workspace/index?a=q&type=global&dbcode=hgnd&m=hgnd&dimension=zb&code=A090201&region=000000&time=1978,2013
// this should be year average data
// 2010 CPI = 100
"NBSC":{
	"1978":18.65323634,
	"1979":19.00764783,
	"1980":20.42529379,
	"1981":20.92893117,
	"1982":21.33930237,
	"1983":21.7683268,
	"1984":22.36523037,
	"1985":24.45439284,
	"1986":26.03991793,
	"1987":27.94254803,
	"1988":33.18410744,
	"1989":39.15314307,
	"1990":40.36560343,
	"1991":41.74594292,
	"1992":44.41335572,
	"1993":50.94198843,
	"1994":63.23447118,
	"1995":74.03469502,
	"1996":80.19026301,
	"1997":82.42865137,
	"1998":81.7757881,
	"1999":80.61928745,
	"2000":80.9550457,
	"2001":81.51464279,
	"2002":80.86177952,
	"2003":81.83174781,
	"2004":85.02145122,
	"2005":86.5510166,
	"2006":87.85674314,
	"2007":92.07237456,
	"2008":97.50046633,
	"2009":96.81029659,
	"2010":100,
	"2011":105.3907853,
	"2012":108.132811,
	"2013":110.9494497},
// CPI data from International Monetary Fund
// http://www.imf.org/external/pubs/ft/weo/2014/02/weodata/weorept.aspx?sy=1986&ey=2019&scsm=1&ssd=1&sort=country&ds=.&br=1&pr1.x=42&pr1.y=8&c=924&s=PCPI%2CPCPIPCH%2CPCPIE%2CPCPIEPCH&grp=0&a=
// year average data
// 2010 CPI = 100
"IMF":{
	"1989":39.155,
	"1990":40.369,
	"1991":41.741,
	"1992":44.413,
	"1993":50.941,
	"1994":63.218, 
	"1995":74.028,
	"1996":80.173,
	"1997":82.418,
	"1998":81.758,
	"1999":80.614, 
	"2000":80.936,
	"2001":81.503,
	"2002":80.851,
	"2003":81.821,
	"2004":85.012,
	"2005":86.542,
	"2006":87.84,
	"2007":92.057,
	"2008":97.488,
	"2009":96.805,
	"2010":100,
	"2011":105.4,
	"2012":108.189,
	"2013":111.028}
};