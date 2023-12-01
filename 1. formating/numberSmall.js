function numberSmall(val) {
  if (val.length==4) {
    const startNum = 1;
    const endNum = 2;
    const text = val;
    let smallText = '';
    for (let n = 0; n < text.length; ++n) {
      if (n == startNum - 1) smallText += '<small>';
      smallText += text[n];
      if (n == endNum - 1) smallText += '</small>';
    }
    return smallText;
  } else {
    return val;
  }
}