import sqlite3
import json
import os

# Connect to the cars database
db_path = '/Users/harshavardhanperla/DA/cars_trends.db'
conn = sqlite3.connect(db_path)
cursor = conn.cursor()

# Query to get all cars data
query = """
SELECT DISTINCT model_name, description, mentions, score, purchase_link
FROM car_trend
WHERE model_name IS NOT NULL 
  AND model_name != '' 
  AND model_name != 'Invalid'
  AND CAST(score AS INTEGER) > 0
ORDER BY CAST(mentions AS INTEGER) DESC, CAST(score AS INTEGER) DESC
"""

cursor.execute(query)
rows = cursor.fetchall()

# Track unique car names (case-insensitive)
seen_cars = set()
cars_data = []

for row in rows:
    model_name = row[0].strip()
    model_name_lower = model_name.lower()
    
    # Skip if we've already seen this car
    if model_name_lower in seen_cars:
        continue
    
    seen_cars.add(model_name_lower)
    
    # Convert score to integer, default to 0 if conversion fails
    try:
        score = int(row[3]) if row[3] else 0
    except (ValueError, TypeError):
        score = 0
    
    car_obj = {
        'id': len(cars_data) + 1,
        'name': model_name,
        'description': row[1] if row[1] else f"High-performance {model_name} with advanced features and reliability.",
        'score': score,
        'link': row[4] if row[4] else f"https://www.google.com/search?q={model_name.replace(' ', '+')}",
        'category': 'cars'
    }
    
    cars_data.append(car_obj)
    
    # Limit to top 20 cars
    if len(cars_data) >= 20:
        break

# Sort by score descending
cars_data.sort(key=lambda x: x['score'], reverse=True)

# Create data directory if it doesn't exist
output_dir = '/Users/harshavardhanperla/DA/src/data'
os.makedirs(output_dir, exist_ok=True)

# Save to JSON file
output_path = os.path.join(output_dir, 'cars.json')
with open(output_path, 'w', encoding='utf-8') as f:
    json.dump(cars_data, f, indent=2, ensure_ascii=False)

print(f"Extracted {len(cars_data)} unique cars. Data saved to: {output_path}")
print(f"\nTop 3 cars:")
for i, car in enumerate(cars_data[:3], 1):
    print(f"{i}. {car['name']} (Score: {car['score']})")

conn.close()
