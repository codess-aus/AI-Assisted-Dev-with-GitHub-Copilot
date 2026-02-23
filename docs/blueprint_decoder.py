import re

def decode_blueprint(filename):
    with open(filename, 'r') as file:
        content = file.read()
    
    pattern = r'\{\* (.*?) \*\}'
    secrets = re.findall(pattern, content)
    return secrets

# Enhanced version with error handling
# If file doesn't exist, return an empty list and print an error message
def decode_blueprint_safe(filename):
    try:
        return decode_blueprint(filename)
    except FileNotFoundError:
        print(f"Error: File '{filename}' not found.")
        return []

if __name__ == "__main__":

    # Function to format and display secrets in a nice report format
    # Shows total count, numbered list, and a separator line
    def display_secrets_report(secrets):
        separator = "=" * 40
        print(separator)
        print("DECODED SECRETS REPORT")
        print(separator)
        print(f"Found {len(secrets)} secret(s):\n")
        for idx, secret in enumerate(secrets, start=1):
            print(f"{idx}. {secret}")
        print(separator)

    # Use it
    secrets = decode_blueprint_safe("blueprint-data.txt")
    display_secrets_report(secrets)

 # Function to categorize secrets by their type (word before the colon)
def categorize_secrets(secrets):
    categories = {}
    for secret in secrets:
        if ':' in secret:
            category = secret.split(':')[0].strip()
        else:
            category = "UNCLASSIFIED"
        
        if category not in categories:
            categories[category] = 0
        categories[category] += 1
    
    return categories

# Show categorization
secrets = decode_blueprint_safe("blueprint-data.txt")
categories = categorize_secrets(secrets)
print("\nSecret Categories:")
for category, count in sorted(categories.items()):
    print(f"  {category}: {count}")
    