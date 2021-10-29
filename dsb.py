import dsbapi

print("HHHI")
# dsbclient = dsbapi.DSBApi("311441", "schuleisttoll")
dsbclient = dsbapi.DSBApi("147322", "wggpupils")


def test(j):
    for i in range (j, 20):
        try:
            print("HLLO")
            entries = dsbclient.fetch_entries()[1] # Rückgabe einer JSON Liste an Arrays
            print ("HHALLLO2222")
            print(entries[i]["date"]) # Datum des ersten Eintrags
        except:
            print(i)
            test(i+1)

# test(1)
entries = dsbclient.fetch_entries() # Rückgabe einer JSON Liste an Arrays