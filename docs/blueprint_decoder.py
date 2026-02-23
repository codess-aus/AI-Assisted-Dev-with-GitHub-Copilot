import re

# Function to read a blueprint file and extract all secrets marked between {* and *}
# Example: League Blueprint contains {* AGENT_CODENAME: SHADOWMIND *}
# Should extract: "AGENT_CODENAME: SHADOWMIND" (without the markers)
# Uses regex pattern to find all occurrences
# Returns a list of extracted secrets
def decode_blueprint(filename):
    with open(filename, 'r') as file:
        content = file.read()
    
    # Use regex to find all secrets between {* and *}
    pattern = r'\{\* (.*?) \*\}'
    secrets = re.findall(pattern, content)
    return secrets

# Test the decoder
#if __name__ == "__main__":
#    secrets = decode_blueprint("blueprint-data.txt")
#    print(f"Found {len(secrets)} secret(s):")
#    for i, secret in enumerate(secrets, 1):
#        print(f"{i}. {secret}")

# Enhanced version with error handling
# If file doesn't exist, return an empty list and print an error message
def decode_blueprint_safe(filename):
    try:
        return decode_blueprint(filename)
    except FileNotFoundError:
        print(f"Error: File '{filename}' not found.")
        return []

# Function to format and display secrets in a nice report format
# Shows total count, numbered list, and a separator line
def display_secrets_report(secrets):
    separator = "=" * 40
    print(separator)
    print("DECODED SECRETS REPORT")
    print(separator)
    print(f"Found {len(secrets)} secret(s):\n")
    for i, secret in enumerate(secrets, 1):
        print(f"{i}. {secret}")
    print(separator)

if __name__ == "__main__":
    # Test error handling
    secrets = decode_blueprint_safe("nonexistent.txt")
    print(f"Found {len(secrets)} secrets")  # Should print 0

    # Test normal operation
    secrets = decode_blueprint_safe("blueprint-data.txt")
    print(f"Found {len(secrets)} secrets")  # Should print 5

    # Use the report function
    secrets = decode_blueprint_safe("blueprint-data.txt")
    display_secrets_report(secrets)