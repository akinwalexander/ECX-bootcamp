
install:
	$(NPM) install


run:
	$(NODE) $(ENTRY_FILE)


clean:
	rm -rf node_modules
	rm -f package-lock.json


start-port:
	$(NODE) $(ENTRY_FILE) --port $(PORT)