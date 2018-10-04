import csv
import pymysql

# Connect to the database
mydb = pymysql.connect(host='localhost',
                             user='root',
                             password='root',
                             db='Industry_Profitability_Analysis',
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor) 

# Grab cursor to execute queries with
cursor = mydb.cursor()

# loop over csv_file_dict

csv_file_dict = {'WIKI-ABBV.csv': 'AABV', 'WIKI-AKAM.csv':'AKAM', 'WIKI-BAC.csv': '', 'WIKI-C.csv', 'WIKI-GOOGL.csv', 'WIKI-JNJ.csv', 'WIKI-COP.csv', 'WIKI-CVX.csv', 'WIKI-EOG.csv', 'WIKI-FB.csv',
'WIKI-JPM.csv', 'WIKI-LLY.csv' 'WIKI-MRK.csv', 'WIKI-OXY.csv', 'WIKI-PFE.csv', 'WIKI-PNC.csv', 'WIKI-TWTR.csv', 'WIKI=-VRSN.csv', 'WIKI-WFC.csv', 'WIKI-XOM.csv'}

for row in csv_file_dict:
  print(row)

# Read the csv file and reference it in the variable, csv_data
csv_data = csv.reader(open('WIKI-AEP.csv', newline=''))
# Print csv row data to console
for row in csv_data:
  print(row)

DUK_data_csv = csv.reader(open('WIKI-D.csv', newline=''))

for row in DUK_data_csv:
  print(row)

NEE_data_csv = csv.reader(open('WIKI-DUK.csv', newline=''))

for row in NEE_data_csv:
  print(row)

D_data_csv = csv.reader(open('WIKI-NEE.csv', newline=''))

for row in D_data_csv:
  print(row)

SO_data_csv = csv.reader(open('WIKI-SO.csv', newline=''))

for row in SO_data_csv:
  insert_row(row, 'SO')
  print(row)


def insert_row(data, symbol):
  pass
  
  # Can put SQL queries in here for every row in the CSV file
  cursor.execute('SELECT * FROM Industry_Profitability_Analysis')

# Close the connection to the database.
mydb.commit()
cursor.close()
print ("Done")