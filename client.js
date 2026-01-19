var t = window.TrelloPowerUp.iframe();

TrelloPowerUp.initialize({
  'card-detail-badges': async function (t, opts) {
    const url = await t.get('card', 'shared', 'redirectUrl');

    if (url) {
      setTimeout(() => {
        window.open(url, "_blank");
      }, 10);
    }

    return [];
  }
});