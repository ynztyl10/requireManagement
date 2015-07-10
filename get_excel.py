#coding=utf-8
import xlrd
import json

data = xlrd.open_workbook('/Users/dung/Downloads/需求模板v1.0.xlsx')
table = data.sheet_by_index(0)
data_list = []
for row in xrange(20,67):
	for col in xrange(1,6):
		cell = table.cell(row,col).value
		if cell and cell != "一级门户" and cell != "一级wap" and cell != "统一搜索" and cell != "统一门户" and cell != "积分商城" and cell != "当期营销":
			data_dict = {}
			data_dict['name'] = cell
			data_dict['value'] = cell
			data_list.append(data_dict)

			#print cell
print json.dumps(data_list,ensure_ascii=False)