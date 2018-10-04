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

# Read the csv file and reference it in the variable, file_data
file_data = csv.reader(open('Stocks.csv', newline=''))
# Print csv row data to console
for row in file_data:
  print(row)
