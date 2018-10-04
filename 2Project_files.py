import csv
import pymysql

# Connect to the database
mydb = pymysql.connect(host='localhost',
                             user='root',
                             password='root',
                             db='Industry_Profitability_Analysis', 
                             charset='utf8mb4',
                             cursorclass=pymysql.cursors.DictCursor) # returns results as a dictionary

# Grab cursor to execute queries with
cursor = mydb.cursor()

print ('---', 'Starting database configuration...', '---')
cursor.execute("SET SESSION sql_mode = ''")

# Create the list of CSV files
csv_list = [
  {'file': 'WIKI-ABBV.csv', 'name': 'ABBV'},
  {'file': 'WIKI-AEP.csv', 'name': 'AEP'},
  {'file': 'WIKI-AKAM.csv', 'name': 'AKAM'},
  {'file': 'WIKI-BAC.csv', 'name': 'BAC'},
  {'file': 'WIKI-C.csv', 'name': 'C'},
  {'file': 'WIKI-COP.csv', 'name': 'COP'},
  {'file': 'WIKI-CVX.csv', 'name': 'CVX'},
  {'file': 'WIKI-D.csv', 'name': 'D'},
  {'file': 'WIKI-DUK.csv', 'name': 'DUK'},
  {'file': 'WIKI-EOG.csv', 'name': 'EOG'},
  {'file': 'WIKI-FB.csv', 'name': 'FB'},
  {'file': 'WIKI-GOOGL.csv', 'name': 'GOOGL'},
  {'file': 'WIKI-JNJ.csv', 'name': 'JNJ'},
  {'file': 'WIKI-JPM.csv', 'name': 'JPM'},
  {'file': 'WIKI-LLY.csv', 'name': 'LLY'},
  {'file': 'WIKI-MRK.csv', 'name': 'MRK'},
  {'file': 'WIKI-NEE.csv', 'name': 'NEE'},
  {'file': 'WIKI-OXY.csv', 'name': 'OXY'},
  {'file': 'WIKI-PFE.csv', 'name': 'PFE'},
  {'file': 'WIKI-PNC.csv', 'name': 'PNC'},
  {'file': 'WIKI-SO.csv', 'name': 'SO'},
  {'file': 'WIKI-TWTR.csv', 'name': 'TWTR'},
  {'file': 'WIKI-VRSN.csv', 'name': 'VRSN'},
  {'file': 'WIKI-WFC.csv', 'name': 'WFC'},
  {'file': 'WIKI-XOM.csv', 'name': 'XOM'}
]

# Build table AND table insertion logic
for company in csv_list:
  # Drop table
  cursor.execute(f"DROP TABLE IF EXISTS {company['name']}")
  # rebuild table
  create_table_statement = f"""
  CREATE TABLE `{company['name']}` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `Date` varchar(50) DEFAULT NULL,
    `Open` varchar(50) DEFAULT NULL,
    `High` varchar(50) DEFAULT NULL,
    `Low` varchar(50) DEFAULT NULL,
    `Close` varchar(50) DEFAULT NULL,
    `Volume` varchar(50) DEFAULT NULL,
    `Ex-Dividend` varchar(50) DEFAULT NULL,
    `Split Ratio` varchar(50) DEFAULT NULL,
    `Adj. Open` varchar(50) DEFAULT NULL,
    `Adj. High` varchar(50) DEFAULT NULL,
    `Adj. Low` varchar(50) DEFAULT NULL,
    `Adj. Close` varchar(50) DEFAULT NULL,
    `Adj. Volume` varchar(50) DEFAULT NULL,
    PRIMARY KEY (`id`)
  ) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_bin
  AUTO_INCREMENT=1 ;
  """
  
  # Can put SQL queries in here for every row in the CSV file
  print('---', f"Creating table: {company['name']}", '---')
  cursor.execute(create_table_statement)

  # Read the csv file and reference it in the variable, csv_data
  path = "C:/Users/link3/Desktop/ALEX USC/Second_Project/files/"
  csv_data = csv.reader(open(f"{path + company['file']}", newline=''))

  # Iterate over each row in the CSV file, adding all the values to their according tables
  print('---', f"Inserting csv data into {company['name']} table", '---')
  for row in csv_data:

    # Create the insert statement
    insert_statement = f"""
    INSERT INTO {company['name']} (`Date`, `Open`, `High`, `Low`, `Close`, `Volume`, `Ex-Dividend`, `Split Ratio`, `Adj. Open`, `Adj. High`, `Adj. Low`, `Adj. Close`, `Adj. Volume`) VALUES(%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)
    """

    cursor.execute(insert_statement, row)

  print('---', f"Finished with {company['name']}", '---')
  print()

# Close the connection to the database.
mydb.commit()
cursor.close()
print ('---', 'Database configuration has completed!', '---')