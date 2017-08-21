/**
 * Abstraction layer for Chrome local storage
 */

export const saveMessage = (key, message) => {
  const storeMessage = (savedMessages) => {
    savedMessages.push(message);
    chrome.storage.local.set({ [key]: savedMessages });
  };
  getMessage(key, storeMessage);
};

export const getMessage = (key, callback) => {
  chrome.storage.local.get(key,
    savedMessages => callback(savedMessages[key] || []));
};