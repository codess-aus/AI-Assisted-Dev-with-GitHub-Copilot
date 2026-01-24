import requests
import re

def retrieve_and_decode_blueprint(blueprint_url):
    """
    Retrieves a classified League blueprint and deciphers it,
    extracting only authentic secrets hidden by The League's tech.
    """
    try:
        # Securely contacting the League DataVault via the CyberGrid
        response = requests.get(blueprint_url)
        response.raise_for_status()

        blueprint_content = response.text

        # Pattern Recognition Protocol: extracts secrets between {* and *}
        secret_pattern = re.compile(r'\{\*(.*?)\*\}')
        secrets = secret_pattern.findall(blueprint_content)

        # Mission Report
        print("=== LEAGUE MISSION REPORT ===")
        if secrets:
            for idx, secret in enumerate(secrets, 1):
                print(f"Secret #{idx}: {secret.strip()}")
        else:
            print("No authentic secrets found. The League's decoys were strong!")

    except requests.HTTPError as http_err:
        print(f'[ALERT] CyberGrid HTTP error: {http_err}')
    except Exception as err:
        print(f'[ALERT] Unexpected error: {err}')

# URL to the League's DataVault blueprint (unchanged, as per instructions)
blueprint_url = 'https://raw.githubusercontent.com/microsoft/CopilotAdventures/main/Data/scrolls.txt'

# Begin the superhero mission!
retrieve_and_decode_blueprint(blueprint_url)