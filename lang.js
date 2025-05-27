// js/lang.js
const translations = {
    en: {
        // General
        navHome: "Home",
        navAbout: "About Me",
        navWhyDonate: "Why I Need Donation",
        navFAQ: "FAQ / Contact",
        footerText: `© ${new Date().getFullYear()} Ayat's Halal Content. Made with 💖`,
        // Homepage
        welcomeLottieAlt: "Animated waving hand or welcome gesture",
        welcomeMessage: "Assalamu Alaikum, I am Ayat! If you like my content, support me to keep going without relying on ads! 🌙💖",
        donateTitle: "Support My Work 🙏",
        donorNameLabel: "Your Name (Optional)",
        donorNamePlaceholder: "e.g., Abdullah",
        donorDescriptionLabel: "Message (Optional)",
        donorDescriptionPlaceholder: "May Allah bless you!",
        submitDonation: "Send Support Note 💌",
        paymentMethodsTitle: "Donate Directly:",
        bkashNumberText: "Bkash Personal:",
        nagadNumberText: "Nagad Personal:",
        copyButtonText: "Copy",
        copiedButtonText: "Copied!",
        donationThanks: "JazakAllah Khairan for your support note! If you wish to donate, please use the numbers below.",
        donationError: "Oops! Something went wrong. Please try again.",
        // About Page
        aboutTitle: "About Me 🎙️",
        aboutContent: `
            <p>Assalamu Alaikum! I'm Ayat, a content creator passionate about sharing beneficial Islamic knowledge and reflections through video.</p>
            <p>My journey began with a simple desire to spread good in a way that is engaging and accessible. I believe in creating high-quality content that adheres to Islamic principles, which includes avoiding music with instruments and ensuring all earnings are Halal.</p>
            <p>This platform is a way for you, my valued viewers, to support this mission directly. Your contributions allow me to dedicate more time and resources to producing even better videos without compromising on these values.</p>
            <p>Thank you for being a part of this community! ✨</p>
        `,
        // Why Donate Page
        whyDonateTitle: "Why Your Donation Matters 💖",
        whyDonateContent: `
            <p>YouTube income can often be associated with advertisements that may not align with Islamic values, or the income source itself can be ambiguous (haram). To avoid this, I have chosen to make my YouTube channel completely ad-free.</p>
            <h3>This means:</h3>
            <ul>
                <li>No disruptive ads during videos.</li>
                <li>No income from YouTube's ad revenue program.</li>
            </ul>
            <p>Creating quality Islamic content takes time, effort, and resources. This includes:</p>
            <ul>
                <li>Research and scriptwriting 📜</li>
                <li>Video recording and editing 🎬</li>
                <li>Equipment (camera, microphone, lighting) ⚙️</li>
                <li>Software licenses 💻</li>
                <li>Time, which is the most valuable resource! 🕒</li>
            </ul>
            <p>Your generous donations are my primary means of support. They enable me to:</p>
            <ul>
                <li>Continue producing high-quality, ad-free Islamic videos.</li>
                <li>Improve production quality.</li>
                <li>Dedicate more time to content creation.</li>
                <li>Ensure that the means of earning are purely Halal.</li>
            </ul>
            <p>Every contribution, no matter how small, makes a significant difference and is deeply appreciated. May Allah reward you abundantly! JazakAllahu Khairan. 🤲</p>
            <p><em>"The believer's shade on the Day of Resurrection will be his charity."</em> (Al-Tirmidhi)</p>
        `,
        // FAQ Page
        faqTitle: "FAQ / Contact ❓",
        faqContent: `
            <h3>Frequently Asked Questions</h3>
            <dl>
                <dt>Q: Is your YouTube income Halal?</dt>
                <dd>A: To avoid any doubt, I do not monetize my YouTube channel with ads. My income for this work comes solely from your direct support through donations, ensuring it's Halal, Insha'Allah.</dd>

                <dt>Q: How can I be sure my donation is used properly?</dt>
                <dd>A: I consider your donations an Amanah (trust). They are used to cover the costs of video production, equipment, software, and living expenses, allowing me to dedicate myself to this Da'wah work.</dd>

                <dt>Q: Can I suggest video topics?</dt>
                <dd>A: Absolutely! I love hearing from my viewers. You can send your suggestions through the contact methods below or in YouTube comments.</dd>

                <dt>Q: What if I can't donate financially?</dt>
                <dd>A: Your Du'as (prayers) are one of the best forms of support! Sharing my videos with others who might benefit is also a great way to help. May Allah reward you!</dd>
            </dl>
            <h3>Contact Me</h3>
            <p>For inquiries, suggestions, or just to say Salam:</p>
            <ul>
                <li><strong>Email:</strong> <a href="mailto:ayat.halal.content@example.com">ayat.halal.content@example.com</a> (Replace with actual email)</li>
                <li><strong>YouTube Channel:</strong> <a href="YOUR_YOUTUBE_CHANNEL_LINK" target="_blank" rel="noopener noreferrer">[Your Channel Name]</a></li>
                <!-- Add other social media if you have them -->
            </ul>
        `,
        // Bangla specific welcome from original prompt
        banglaWelcome: "YouTube থেকে ইনকাম হারাম হতে পারে, তাই আমি অ্যাড-ফ্রি, কোয়ালিটি ইসলামিক ভিডিও বানাই—আপনারা যদি আমাকে সাহায্য করতে চান, এই ওয়েবসাইট থেকে ডোনেট করতে পারেন ইনশাআল্লাহ!"
    },
    bn: {
        // General
        navHome: "হোম",
        navAbout: "আমার সম্পর্কে",
        navWhyDonate: "কেন অনুদান প্রয়োজন",
        navFAQ: "প্রশ্নাবলী / যোগাযোগ",
        footerText: `© ${new Date().getFullYear()} Ayat's Halal Content. 💖 দিয়ে তৈরি।`,
        // Homepage
        welcomeLottieAlt: "অ্যানিমেটেড হাত নাড়ানো বা স্বাগত ভঙ্গি",
        welcomeMessage: "আসসালামু আলাইকুম, আমি আয়াত! যদি আমার কন্টেন্ট আপনার ভালো লাগে, বিজ্ঞাপন ছাড়াই কাজ চালিয়ে যেতে আমাকে সমর্থন করুন! 🌙💖",
        donateTitle: "আমার কাজকে সমর্থন করুন 🙏",
        donorNameLabel: "আপনার নাম (ঐচ্ছিক)",
        donorNamePlaceholder: "যেমন, আব্দুল্লাহ",
        donorDescriptionLabel: "বার্তা (ঐচ্ছিক)",
        donorDescriptionPlaceholder: "আল্লাহ আপনার মঙ্গল করুন!",
        submitDonation: "সহায়তার নোট পাঠান 💌",
        paymentMethodsTitle: "সরাসরি ডোনেট করুন:",
        bkashNumberText: "বিকাশ পার্সোনাল:",
        nagadNumberText: "নগদ পার্সোনাল:",
        copyButtonText: "কপি",
        copiedButtonText: "কপি হয়েছে!",
        donationThanks: "আপনার সহায়তার নোটের জন্য জাযাকাল্লাহ খাইরান! আপনি যদি অনুদান দিতে চান, অনুগ্রহ করে নীচের নম্বরগুলি ব্যবহার করুন।",
        donationError: "উফফ! কিছু একটা সমস্যা হয়েছে। অনুগ্রহ করে আবার চেষ্টা করুন।",
        // About Page
        aboutTitle: "আমার সম্পর্কে 🎙️",
        aboutContent: `
            <p>আসসালামু আলাইকুম! আমি আয়াত, একজন কন্টেন্ট ক্রিয়েটর, যিনি ভিডিওর মাধ্যমে উপকারী ইসলামিক জ্ঞান এবং চিন্তাভাবনা শেয়ার করতে আগ্রহী।</p>
            <p>আমার যাত্রা শুরু হয়েছিল সহজ একটি ইচ্ছা থেকে - আকর্ষণীয় এবং সহজলভ্য উপায়ে ভালো কিছু ছড়িয়ে দেওয়া। আমি ইসলামিক নীতি মেনে উচ্চমানের কন্টেন্ট তৈরিতে বিশ্বাসী, যার মধ্যে বাদ্যযন্ত্রসহ সঙ্গীত পরিহার করা এবং সমস্ত উপার্জন হালাল হওয়া নিশ্চিত করা অন্তর্ভুক্ত।</p>
            <p>এই প্ল্যাটফর্মটি আমার মূল্যবান দর্শকদের জন্য একটি মাধ্যম, যার দ্বারা আপনারা সরাসরি এই মিশনকে সমর্থন করতে পারেন। আপনাদের অনুদান আমাকে এই মূল্যবোধগুলোর সাথে আপোস না করে আরও ভালো ভিডিও তৈরিতে আরও বেশি সময় এবং সংস্থান উৎসর্গ করতে সাহায্য করে।</p>
            <p>এই সম্প্রদায়ের অংশ হওয়ার জন্য আপনাকে ধন্যবাদ! ✨</p>
        `,
        // Why Donate Page
        whyDonateTitle: "আপনার অনুদান কেন গুরুত্বপূর্ণ 💖",
        whyDonateContent: `
            <p>ইউটিউব থেকে আয় প্রায়শই এমন বিজ্ঞাপনের সাথে যুক্ত হতে পারে যা ইসলামিক মূল্যবোধের সাথে সঙ্গতিপূর্ণ নাও হতে পারে, অথবা আয়ের উৎসটি নিজেই অস্পষ্ট (হারাম) হতে পারে। এটি এড়াতে, আমি আমার ইউটিউব চ্যানেলটিকে সম্পূর্ণ বিজ্ঞাপন-মুক্ত করার সিদ্ধান্ত নিয়েছি।</p>
            <h3>এর মানে হলো:</h3>
            <ul>
                <li>ভিডিও চলাকালীন কোনও বিরক্তিকর বিজ্ঞাপন নেই।</li>
                <li>ইউটিউবের বিজ্ঞাপন রাজস্ব প্রোগ্রাম থেকে কোনও আয় নেই।</li>
            </ul>
            <p>মানসম্পন্ন ইসলামিক কন্টেন্ট তৈরি করতে সময়, প্রচেষ্টা এবং সম্পদের প্রয়োজন। এর মধ্যে রয়েছে:</p>
            <ul>
                <li>গবেষণা এবং স্ক্রিপ্ট লেখা 📜</li>
                <li>ভিডিও রেকর্ডিং এবং সম্পাদনা 🎬</li>
                <li>সরঞ্জাম (ক্যামেরা, মাইক্রোফোন, আলো) ⚙️</li>
                <li>সফ্টওয়্যার লাইসেন্স 💻</li>
                <li>সময়, যা সবচেয়ে মূল্যবান সম্পদ! 🕒</li>
            </ul>
            <p>আপনাদের উদার অনুদানই আমার সমর্থনের প্রধান মাধ্যম। এগুলো আমাকে সক্ষম করে:</p>
            <ul>
                <li>উচ্চ-মানের, বিজ্ঞাপন-মুক্ত ইসলামিক ভিডিও তৈরি চালিয়ে যেতে।</li>
                <li>উৎপাদনের মান উন্নত করতে।</li>
                <li>কন্টেন্ট তৈরিতে আরও বেশি সময় দিতে।</li>
                <li>উপার্জনের মাধ্যম সম্পূর্ণরূপে হালাল হওয়া নিশ্চিত করতে।</li>
            </ul>
            <p>প্রতিটি অনুদান, তা যতই ছোট হোক না কেন, একটি গুরুত্বপূর্ণ পার্থক্য তৈরি করে এবং গভীরভাবে প্রশংসিত হয়। আল্লাহ আপনাকে প্রচুর প্রতিদান দিন! জাযাকাল্লাহু খাইরান। 🤲</p>
            <p><em>"কিয়ামতের দিন মুমিনের ছায়া হবে তার সদকা।"</em> (তিরমিযী)</p>
        `,
        // FAQ Page
        faqTitle: "প্রশ্নাবলী / যোগাযোগ ❓",
        faqContent: `
            <h3>সাধারণ জিজ্ঞাসা</h3>
            <dl>
                <dt>প্রশ্ন: আপনার ইউটিউব আয় কি হালাল?</dt>
                <dd>উত্তর: কোনও সন্দেহ এড়াতে, আমি আমার ইউটিউব চ্যানেল বিজ্ঞাপন দিয়ে মনিটাইজ করি না। এই কাজের জন্য আমার আয় শুধুমাত্র আপনাদের সরাসরি অনুদানের মাধ্যমেই আসে, যা ইনশাআল্লাহ হালাল নিশ্চিত করে।</dd>

                <dt>প্রশ্ন: আমি কীভাবে নিশ্চিত হতে পারি যে আমার অনুদান সঠিকভাবে ব্যবহৃত হচ্ছে?</dt>
                <dd>উত্তর: আমি আপনাদের অনুদানকে আমানত (বিশ্বাস) হিসেবে বিবেচনা করি। এগুলি ভিডিও তৈরি, সরঞ্জাম, সফ্টওয়্যার এবং জীবনযাত্রার ব্যয় নির্বাহের জন্য ব্যবহৃত হয়, যা আমাকে এই দাওয়াহ কাজে নিজেকে উৎসর্গ করতে দেয়।</dd>

                <dt>প্রশ্ন: আমি কি ভিডিওর বিষয় প্রস্তাব করতে পারি?</dt>
                <dd>উত্তর: অবশ্যই! আমি আমার দর্শকদের কাছ থেকে শুনতে ভালোবাসি। আপনি নীচের যোগাযোগের মাধ্যমে বা ইউটিউব মন্তব্যে আপনার পরামর্শ পাঠাতে পারেন।</dd>

                <dt>প্রশ্ন: যদি আমি আর্থিকভাবে অনুদান দিতে না পারি?</dt>
                <dd>উত্তর: আপনার দু'আ (প্রার্থনা) সমর্থনের অন্যতম সেরা মাধ্যম! আমার ভিডিওগুলি অন্যদের সাথে শেয়ার করা যারা উপকৃত হতে পারে, তাও সাহায্য করার একটি দুর্দান্ত উপায়। আল্লাহ আপনাকে পুরস্কৃত করুন!</dd>
            </dl>
            <h3>যোগাযোগ করুন</h3>
            <p>অনুসন্ধান, পরামর্শ বা শুধু সালাম জানাতে:</p>
            <ul>
                <li><strong>ইমেইল:</strong> <a href="mailto:ayat.halal.content@example.com">ayat.halal.content@example.com</a> (প্রকৃত ইমেইল দিয়ে প্রতিস্থাপন করুন)</li>
                <li><strong>ইউটিউব চ্যানেল:</strong> <a href="YOUR_YOUTUBE_CHANNEL_LINK" target="_blank" rel="noopener noreferrer">[আপনার চ্যানেলের নাম]</a></li>
                <!-- আপনার অন্যান্য সোশ্যাল মিডিয়া থাকলে যোগ করুন -->
            </ul>
        `,
        // Bangla specific welcome from original prompt
        banglaWelcome: "YouTube থেকে ইনকাম হারাম হতে পারে, তাই আমি অ্যাড-ফ্রি, কোয়ালিটি ইসলামিক ভিডিও বানাই—আপনারা যদি আমাকে সাহায্য করতে চান, এই ওয়েবসাইট থেকে ডোনেট করতে পারেন ইনশাআল্লাহ!"
    }
};
