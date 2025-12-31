import sqlite3
import json

def extract_laptop_data():
    db_file = '/Users/harshavardhanperla/DA/laptops_trends.db'
    
    all_items = []
    seen_models = set()
    
    try:
        conn = sqlite3.connect(db_file)
        cursor = conn.cursor()
        
        # Extract data
        cursor.execute("""
            SELECT model_name, mentions, description, score, purchase_link 
            FROM laptop_trend 
            ORDER BY mentions DESC
        """)
        
        rows = cursor.fetchall()
        
        for row in rows:
            model_name = row[0]
            score = int(row[3]) if row[3] and row[3].isdigit() else 85
            
            # Skip invalid entries (score 0 or name 'Invalid')
            if model_name.lower() == 'invalid' or score == 0:
                continue
                
            # Remove duplicates based on model name
            if model_name not in seen_models:
                seen_models.add(model_name)
                all_items.append({
                    'name': model_name,
                    'mentions': row[1],
                    'description': row[2] or f'Popular {model_name} with high user engagement and excellent performance.',
                    'score': score,
                    'link': row[4] or 'https://example.com'
                })
        
        conn.close()
    except Exception as e:
        print(f"Error processing {db_file}: {e}")
        return []
    
    # Sort by mentions and get top 20
    all_items.sort(key=lambda x: x['mentions'], reverse=True)
    top_20 = all_items[:20]
    
    # Sort by score in descending order
    top_20.sort(key=lambda x: x['score'], reverse=True)
    
    # Add IDs and category
    for i, item in enumerate(top_20):
        item['id'] = i + 1
        item['category'] = 'laptops'
        del item['mentions']  # Remove mentions field as it's not needed in UI
    
    return top_20

# Extract data
data = extract_laptop_data()

# Save to JSON file
output_file = '/Users/harshavardhanperla/DA/src/data/laptops.json'
with open(output_file, 'w') as f:
    json.dump(data, f, indent=2)

print(f"Extracted {len(data)} unique laptops")
print("Data saved to:", output_file)

# Print first 3 items as preview
print("\nFirst 3 laptops:")
for item in data[:3]:
    print(f"  - {item['name']} (Score: {item['score']})")
