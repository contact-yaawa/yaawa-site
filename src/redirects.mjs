// Answer pages renamed by the 2026-09 title cleanup: HTML entities and
// wedding-subreddit budget prefixes ("(10k)", "&lt;$10k") had leaked from
// Reddit post titles into slugs. These URLs were live and indexed, so each
// old path redirects to its new one. Astro's static build emits a
// meta-refresh page with a canonical link at each old path.
//
// Three of the entries point at a pre-existing twin rather than a rename:
// 10k-bridesmaid-gifts, 10k-feedback-needed-on-my and 15k-large-wedding-advice
// were byte-identical duplicates of the already-clean pages and were deleted.
export const answerRedirects = {
  '/answers/10k-advice-on-how-much':               '/answers/advice-on-how-much',
  '/answers/10k-bridesmaid-gifts':                 '/answers/bridesmaid-gifts',
  '/answers/10k-dessert-after-the-dinner':         '/answers/dessert-after-the-dinner',
  '/answers/10k-feedback-needed-on-my':            '/answers/feedback-needed-on-my',
  '/answers/10k-giving-away-faux-flowers':         '/answers/giving-away-faux-flowers',
  '/answers/10k-hair-makeup-what-are':             '/answers/hair-makeup-what-are',
  '/answers/10k-hairmake-up-artists':              '/answers/hairmake-up-artists',
  '/answers/10k-is-it-normal-for':                 '/answers/is-it-normal-for',
  '/answers/10k-live-music-at-ceremony':           '/answers/live-music-at-ceremony',
  '/answers/10k-not-having-a-dj':                  '/answers/not-having-a-dj',
  '/answers/10k-parent-gift-design':               '/answers/parent-gift-design',
  '/answers/10k-solution-to-filming-wedding':      '/answers/solution-to-filming-wedding',
  '/answers/10k-wedding-makeup':                   '/answers/wedding-makeup',
  '/answers/10k-wedding-website-recommendations':  '/answers/wedding-website-recommendations',
  '/answers/10kborder-or-no-border-on':            '/answers/border-or-no-border-on',
  '/answers/10kgt-having-a-hard-time':             '/answers/having-a-hard-time',
  '/answers/12k-wedding-favor-opinions':           '/answers/wedding-favor-opinions',
  '/answers/14k-thoughts-on-the-schedule':         '/answers/thoughts-on-the-schedule',
  '/answers/15k':                                  '/answers/wedding-advice-15k-budget',
  '/answers/15k-is-it-worth-800':                  '/answers/is-it-worth-800',
  '/answers/15k-large-wedding-advice':             '/answers/large-wedding-advice',
  '/answers/15k-officiant-packages-375-v':         '/answers/officiant-packages-375-v',
  '/answers/16k-basic-buffet-vs-more':             '/answers/basic-buffet-vs-more',
  '/answers/17k-how-to-time-a':                    '/answers/how-to-time-a',
  '/answers/1k-is-it-worth-getting':               '/answers/is-it-worth-getting',
  '/answers/2k-looking-for-mua-that':              '/answers/looking-for-mua-that',
  '/answers/4k-7k-socal-sunday-brunch-wedding':    '/answers/socal-sunday-brunch-wedding',
  '/answers/4k-northern-il-southern':              '/answers/northern-il-southern',
  '/answers/5k-questions-on-rehearsal-and':        '/answers/questions-on-rehearsal-and',
  '/answers/8k-for-those-who-rented':              '/answers/for-those-who-rented',
  '/answers/can-i-use-bampw-photos':               '/answers/can-i-use-bw-photos',
  '/answers/daily-chat-amp-quick-questions':       '/answers/daily-chat-and-quick-questions',
  '/answers/lt10k-i-finished-my-dress':            '/answers/i-finished-my-dress',
  '/answers/lt10k-wedding-venues-near-shenandoah': '/answers/wedding-venues-near-shenandoah',
  '/answers/phd-student-amp-bride-to-be-what':     '/answers/phd-student-and-bride-to-be-what',
};
