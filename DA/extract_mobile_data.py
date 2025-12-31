import sqlite3
import json

def extract_and_merge_data():
    # Connect to both databases
    db_files = [
        '/Users/harshavardhanperla/DA/mobile_trends.db',
        '/Users/harshavardhanperla/DA/mobile_trends (1).db'
    ]
    
    all_items = []
    seen_models = set()
    
    for db_file in db_files:
        try:
            conn = sqlite3.connect(db_file)
            cursor = conn.cursor()
            
            # Extract data
            cursor.execute("""
                SELECT model_name, mentions, description, score, purchase_link 
                FROM mobile_trend 
                ORDER BY mentions DESC
            """)
            
            rows = cursor.fetchall()
            
            for row in rows:
                model_name = row[0]
                # Remove duplicates based on model name
                if model_name not in seen_models:
                    seen_models.add(model_name)
                    all_items.append({
                        'name': model_name,
                        'mentions': row[1],
                        'description': row[2] or f'Popular {model_name} with high user engagement and excellent reviews.',
                        'score': int(row[3]) if row[3] and row[3].isdigit() else 85,
                        'link': row[4] or 'https://example.com'
                    })
            
            conn.close()
        except Exception as e:
            print(f"Error processing {db_file}: {e}")
    
    # Sort by mentions and get top 20
    all_items.sort(key=lambda x: x['mentions'], reverse=True)
    top_20 = all_items[:20]
    
    # Sort by score in descending order
    top_20.sort(key=lambda x: x['score'], reverse=True)
    
    # Add IDs and category
    for i, item in enumerate(top_20):
        item['id'] = i + 1
        item['category'] = 'mobilephones'
        del item['mentions']  # Remove mentions field as it's not needed in UI
    
    return top_20

# Extract data
data = extract_and_merge_data()

# Save to JSON file
output_file = '/Users/harshavardhanperla/DA/src/data/mobilephones.json'
with open(output_file, 'w') as f:
    json.dump(data, f, indent=2)

print(f"Extracted {len(data)} unique mobile phones")
print("Data saved to:", output_file)
