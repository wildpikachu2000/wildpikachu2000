

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
	"1990":100,
	"1991":103.4,
	"1992":110.0176,
	"1993":122.0408,
	"1994":142.3427,
	"1995":145.3211,
	"1996":126.8193,
	"1997":111.3324,
	"1998":101.9776,
	"1999":97.8112,
	"2000":98.9944,
	"2001":101.1028,
	"2002":99.8944,
	"2003":100.3904,
	"2004":105.1468,
	"2005":105.7702,
	"2006":103.327,
	"2007":106.372,
	"2008":110.9832,
	"2009":105.1587,
	"2010":102.5769,
	"2011":108.8782,
	"2012":108.1404,
	"2013":105.2676,
	"2014":104.652,
	"2015":103.428,
	"2016":103.428,
	"2017":103.632,
	"2018":103.7336,
	"2019":105.0609,
	"2020":105.4725,},
// CPI data from International Monetary Fund
// http://www.imf.org/external/pubs/ft/weo/2014/02/weodata/weorept.aspx?sy=1986&ey=2019&scsm=1&ssd=1&sort=country&ds=.&br=1&pr1.x=42&pr1.y=8&c=924&s=PCPI%2CPCPIPCH%2CPCPIE%2CPCPIEPCH&grp=0&a=
// year average data
// 2010 CPI = 100
"IMF":{
	"1990":100,
	"1991":103.4,
	"1992":110.0176,
	"1993":122.0408,
	"1994":142.3427,
	"1995":145.3211,
	"1996":126.8193,
	"1997":111.3324,
	"1998":101.9776,
	"1999":97.8112,
	"2000":98.9944,
	"2001":101.1028,
	"2002":99.8944,
	"2003":100.3904,
	"2004":105.1468,
	"2005":105.7702,
	"2006":103.327,
	"2007":106.372,
	"2008":110.9832,
	"2009":105.1587,
	"2010":102.5769,
	"2011":108.8782,
	"2012":108.1404,
	"2013":105.2676,
	"2014":104.652,
	"2015":103.428,
	"2016":103.428,
	"2017":103.632,
	"2018":103.7336,
	"2019":105.0609,
	"2020":105.4725,}
};
