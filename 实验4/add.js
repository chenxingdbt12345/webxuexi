var provinces = ["河北省", "山东省", "黑龙江省"];
var cities = [
	["石家庄市", "唐山市", "秦皇岛市"],
	["济南市", "青岛市", "潍坊市", "聊城市"],
	["哈尔滨市", "牡丹江市", "齐齐哈尔市"],
];
var areas = [
	[
		["桥西区", "新华区", "长安区"],
		["路南区", "路北区", "开平区", "古治区"],
		["海港区", "北戴河区", "山海关区"]
	],
	[
		["历下区", "天桥区", "长清区", "历城区"],
		["市南区", "市北区", "崂山区", "城阳区", "高新区"],
		["潍城区", "至文区", "高新区", "寒亭区", "坊子区"],
		["东昌府区", "临清市", "在平县", "东阿县", "高唐县", "阳谷县", "冠县", "莘县"]
	],
	[
		["道里区", "南岗区", "道外区", "平房区"],
		["绥芬河市", "宁安市", "海林市", "穆棱市"],
		["龙沙区", "铁锋区"],
	]
];

function initprovince() {
	province = document.getElementById("province");
	city = document.getElementById("city");
	area = document.getElementById("area");
	province.options.length = 1;
	for (var i = 0; i < provinces.length; i++) {
		var option = new Option(provinces[i], provinces[i]);
		province.options.add(option);
	}
}


function provinceChange() {
	city.options.length = 1;
	area.options.length = 1;
	if (province.selectedIndex == 0) {
		return;
	}
	var pIndex = province.selectedIndex;
	for (var i = 0; i < cities[pIndex - 1].length; i++) {
		var optionValue = cities[pIndex - 1][i];
		var option = new Option(optionValue, optionValue);
		city.options.add(option);
	}
	citychange();
}

function cityChange() {
	area.options.length = 1;
	if (city.selectedIndex == 0) {
		return;
	}
	var pIndex = province.selectedIndex;
	var cIndex = city.selectedIndex;
	for (var i = 0; i < areas[pIndex - 1][cIndex - 1].length; i++) {
		var optionValue = areas[pIndex - 1][cIndex - 1][i];
		var option = new Option(optionValue, optionValue);
		area.options.add(option);
	}
}
window.onload=function() {
	initprovince();
	province.onchange = provinceChange;
	city.onchange = cityChange;
};
