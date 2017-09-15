/**
 * Abstraction layer for Chrome sync storage
 */

export const saveMessage = (key, message) => {
  const storeMessage = (savedMessages) => {
    savedMessages.push(message);
    chrome.storage.sync.set({ [key]: savedMessages });
  };
  getMessage(key, storeMessage);
};

export const getMessage = (key, callback) => {
  chrome.storage.sync.get(key,
    savedMessages => callback(savedMessages[key] || []));
};

export const setOnChanged = (listener) => {
  chrome.storage.onChanged.addListener(listener);
}