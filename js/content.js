const SADO_CONTENT_KEY = 'sadoSiteContent';

const SADO_DEFAULT_CONTENT = {
  stat1Num: '20 000+',
  stat1Label: 'mamnun sayohatchi',
  stat2Num: '8+ yil',
  stat2Label: 'tajriba',
  stat3Num: '552+',
  stat3Label: 'muvaffaqiyatli safar',

  pkg1Title: 'Standart Umra',
  pkg1Desc: '9 kunlik safar, qulay mehmonxona, guruh dasturi va gid xizmati bilan.',
  pkg1Price: "Narxi so'rov asosida",
  pkg2Title: 'Komfort Umra',
  pkg2Desc: 'Haramga yaqin mehmonxona, qulay transport va kengaytirilgan dastur.',
  pkg2Price: "Narxi so'rov asosida",
  pkg3Title: 'Makka + Madina VIP',
  pkg3Desc: "5 yulduzli mehmonxonalar, shaxsiy gid va individual dastur bilan VIP safar.",
  pkg3Price: "Narxi so'rov asosida",

  testi1Quote: '"Safar juda yaxshi tashkil etilgan edi, gid doim yordam berdi. Rahmat SADO Travel jamoasiga!"',
  testi1Name: "Aziz Yoqubxo'jayev",
  testi1Role: 'Umra sayohatchisi',
  testi2Quote: '"Mehmonxona joylashuvi juda qulay, Haramga yaqin edi. Barcha jarayon shaffof va oson bo\'ldi."',
  testi2Name: 'Shahboz Nomozov',
  testi2Role: 'Guruh safari ishtirokchisi',
  testi3Quote: '"Oilam bilan borgan edik, hammasi rejadagidek bo\'ldi. Albatta yana murojaat qilamiz."',
  testi3Name: 'Madina Rahimova',
  testi3Role: 'Umra sayohatchisi',

  igUsername: 'sadotravel',
  threadsUsername: 'sadotravel',
  fbSlug: 'sadotravel',
  fbName: 'Sado Travel',
  taplinkSlug: 'sadotravel',
};

function sadoLoadContent() {
  try {
    const raw = localStorage.getItem(SADO_CONTENT_KEY);
    if (!raw) return { ...SADO_DEFAULT_CONTENT };
    return { ...SADO_DEFAULT_CONTENT, ...JSON.parse(raw) };
  } catch {
    return { ...SADO_DEFAULT_CONTENT };
  }
}

function sadoSaveContent(content) {
  localStorage.setItem(SADO_CONTENT_KEY, JSON.stringify(content));
}

function sadoResetContent() {
  localStorage.removeItem(SADO_CONTENT_KEY);
}

function sadoComputeLinks(content) {
  return {
    instagram: `https://www.instagram.com/${content.igUsername}`,
    'instagram-dm': `https://ig.me/m/${content.igUsername}`,
    threads: `https://www.threads.net/@${content.threadsUsername}`,
    facebook: `https://facebook.com/${content.fbSlug}`,
    taplink: `https://taplink.cc/${content.taplinkSlug}`,
  };
}

function sadoComputeDerivedText(content) {
  return {
    igUsernameText: content.igUsername,
    igUsernameText2: content.igUsername,
    threadsUsernameText: content.threadsUsername,
    fbNameText: content.fbName,
    taplinkSlugText1: content.taplinkSlug,
    taplinkSlugText2: content.taplinkSlug,
  };
}

function sadoApplyContent(content) {
  const derivedText = sadoComputeDerivedText(content);
  document.querySelectorAll('[data-field]').forEach((el) => {
    const field = el.getAttribute('data-field');
    if (field in content) {
      el.textContent = content[field];
    } else if (field in derivedText) {
      el.textContent = derivedText[field];
    }
  });

  const links = sadoComputeLinks(content);
  document.querySelectorAll('[data-link]').forEach((el) => {
    const linkType = el.getAttribute('data-link');
    if (linkType in links) {
      el.setAttribute('href', links[linkType]);
    }
  });
}
