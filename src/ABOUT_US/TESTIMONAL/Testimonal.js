import React from 'react'
import './testimonal.css'
import caregiver_talking from '../images/caregiver-talking-to-client-in-kitchen-1326x862-1-997x647.jpg'
import caregiver_smiling from '../images/caregiver-smiling-at-client-370x240.jpg'

import Image from '../../COMPONENT/IMAGE/image'
import TheamCard from '../../COMPONENT/TEAM_CARD/TheamCard'
import NavCard from '../../COMPONENT/NAVCARD/Nav_card'
import care_manager_meeting_family from '../images/care-manager-meeting-family-of-elderly-client-1969x6890-1962x687.jpg'

export default function Testimonal(props) {


  const item = [
    {
      text1: 'Mrs J King',
      text2: '— 5  star The ladies that come and visit my mum are just amazing, caring, thoughtful, nothing is too much trouble, they always put mum at the front of anything they do. They are always pleased to see her and visa versa, a recent spell in respite didn’t damper the efforts they just bundled her up and took her to the park. Thank you for everything, keep up the good work. Special mention for Kay who is an absolute gem. I know my sister would agree',
    },
    {
      text1: "Son of Client - Mrs M",
      text2: "'When my Mum's care needs increased to the point that we couldn't manage everything ourselves, we decided to look at options for additional support. After a lot of consideration, we decided to approach Home Instead Taunton to discuss what our options were. From the initial meeting, it was clear that the company designed the care package with my Mum's needs and wishes as the primary concern, and we were reassured that my Mum would be well looked after. Based on what we have witnessed over the last 6 months we could not have made a better choice. The management and staff of Home Instead have surpassed our expectations with their care, thoughtfulness, professionalism and empathy. Without exception, the caregivers treated my Mum with genuine warmth and kindness and helped to make the last months of her life happy and contented. I would not hesitate to recommend them and my family and I will always be grateful for the superb support they gave to my Mum and us during a difficult period'.",
    },
    {
      text1: "Daughter of Client Mrs H - April 2018",
      text2: "Home Instead have been supporting my mum after her discharge from hospital with a fractured sacrum . Staff always arrive on time we know who and when will arrive and nothing is too much trouble . A big thankyou to Karen and Lorna who have been supporting mum to become more independent again . Mum is looking forward now for some companionship visits starting next week so that she can go out again which she has missed doing over the last few months . I cannot speak more highly of your company. Thank you.",
    },
    {
      text1: "Client P",
      text2: "Home Instead is one of the rare agencies I have used during the last 6years where not only do the office staff and the front line carers work as a team but also work as a team with my own employees. All their employees work to an extremely high standard but they actually truly care and not only look after my physical well being but also my emotional one. They have never let me down and never fail to communicate with me regarding any problems. They bend over backwards to be there for me and have never let me down. Any carer they ever send to me cares not only physically but also with their hearts. The level of care they provide is truly exceptional.",
    },
    {
      text1: "CAREGiver Lucy",
      text2: "I was very pleased to accept the invitation to join the Home Instead team at the beginning of 2016",
      text3: "I can honestly say that they are the first team of people I've worked with that care about me and make me feel valued.",
      text4: "I'm 56 and have had quite a few employers over the years and at last I am really happy with my work.",
      text5: "I will always be eternally grateful to the team for giving me the chance and confidence to do well.",
      text6: "Take care. Lucy L.",
    },
    {
      text1: "Mrs B's family member",
      text2: '"My wife and I have been very impressed with Home Instead since requesting them to provide care for my step-mother and father. Their communication with us and our parents has always been very good. They put real effort into matching appropriate carer staff to the clients. The carers themselves have always been pleasant and never seem rushed. There is such flexibility in the service and it certainly gives peace of mind to a family like us who are not nearby. We continue to be glad we chose Home Instead and would happily recommend them to others".',
    },
    {
      text1: "Mr S - Client",
      text2: "'I am “over the moon” with the help that I get from yourselves. I really can hardly believe that two different help organisations could be so different, one from the other. That’s not flannel, but the God’s honest truth. I’ve been “impressed” by you from the moment you took your first step into my home. You’ve set a standard – so far – that you’ll have a lot to live up to, but I fancy that you will do “just that”! What a blessing it is that I know just where I am with you, and that I can depend upon you. As I say, you’ve set a standard that you’ll do well to live up to. It’s “early days” yet, but I feel reasonably sure that you’ll not let me down. That leaves me with a sense of “security”, rather than the ‘insecurity’ I felt – all along – with your predecessors'",
    },
    {
      text1: "Mrs W - Client's wife",
      text2: "'Just want to let you know how happy we both are with the care you provide. S & L are really lovely and R feels very comfortable with them. They are a pleasure to have in our home'",
    },
    {
      text1: "Mr B - Client",
      text2: "We are more than pleased with the service we get from L, she is a star, nothing is too much trouble",
    },
    {
      text1: "Mrs M, Client’s daughter",
      text2: "I’m very pleased with Home Instead. They are always punctual and they are the first company to keep sending the same person. I would definitely recommend them.",
    },
    {
      text1: "Mrs S, Client",
      text2: "We have used other companies and they told us what they needed, we had no say in the matter. It’s a lot different now we have changed to Home Instead, they treat us like individuals and ask what we want",
    },
    {
      text1: "Mr.D,Client",
      text2: "We all know how much she disliked hospital and are so pleased that your organisation with such committed carers, made it possible for her to stay at home for so long",
    },
    {
      text1: "RyanK Client’s nephew",
      text2: "There is a real feeling of assurance that the person you love and care for is being taken care of in your absence. That’s what Home Instead does. My aunt hates to see her CAREGivers go. There are times she probably would like to see them more than me",
    },
    {
      text1: "Mrs M Clients Daughter",
      text2: "“There is a real feeling of assurance that the person you love and care for is being taken care of in your absence. That’s what Home Instead does. My aunt hates to see her CAREGivers go. There are times she probably would like to see them more than me.”- Ryan K, Client’s nephew“We all know how much she disliked hospital and are so pleased that your organisation with such committed carers, made it possible for her to stay at home for so long.”- Mr.D, Client“We have used other companies and they told us what they needed, we had no say in the matter. It’s a lot different now we have changed to Home Instead, they treat us like individuals and ask what we want.”- Mrs S, Client.“I’m very pleased with Home Instead. They are always punctual and they are the first company to keep sending the same person. I would definitely recommend them.”- Mrs M, Client’s daughter",
    },
    {
      text1: "Mrs H Client Daughter",
      text2: "As I don’t live near my parents having the services of Home Instead in place is a godsend, I know my parents are in good hands and having lovely staff looking after them",
      text3: "Overall Standard: Excellent (5)",
      text4: "Staff: Excellent (5)",
      text5: "Care / Support: Excellent (5)",
      text6: "Management: Excellent (5)",
      text7: "Treated with Dignity: Excellent (5)",
      text8: "Value for Money: Good (4)",
      text8: "How likely would you recommend? Extremely Likely",
    },
    {
      text1: "Son of Client- Mrs G",
      text2: "'My family are very grateful to the team at Home Instead for the excellent support you have provided first to my father, and for the last 18 months, to my mother.  Please pass on these thanks to all the carers who have been involved and to the admin team too, I am extremely grateful'.",
    },
    {
      text1: "Daughter of Client",
      text2: "It is a great relief to know that my parents are in such safe hands. My dad, who looks after my mum who has dementia, really looks forward to the carers' visits each week and enjoys the chats and good-humoured conversation. Their needs are assessed, understood and catered for in a sensitive way by the same people each week",
    },
    {
      text1: "Daughter Of Client",
      text2: "I am writing on behalf of all of us Collins daughters to say thank you and your staff for all the help you are giving us in enabling Mum to stay in her own home. We are incredibly impressed with the person centred care which you and all of the staff give and with the very thoughtful and caring way you operate. When we first asked you to carryTaunton out cleaning services for Mum we had no idea how much more than basic home care you would be able to offer as the situation changed, including useful suggestions and assistance in managing changing behaviour. We know that you have many clients yet we always feel that Mum's needs are as much a priority to you as they are to us, and that nothing is too much trouble. The carers have been excellent at identifying health issues and getting prompt medical attention, your policy of maintaining continuity of carers definately helps with that.It has also been nice to be able to meet members of the office staff as well as carers and it does really feel as if you all work as a team to which we also belong.We have every confidence that, with your help and advice Mum can keep her independence for as long as possible.Please convey our thanks to all of the staff.Your model of home care should be held up as an example of excellence.",
    },
    {
      text1: "Family member of Client",
      text2: "‘ Do you know, that the management and CAREGiver Team have become an extended family to us without the Christmas arguments! , I can’t thank you enough for the incredible support you have given to Mum as well as the family'"
    },
    {
      text1: "Daughter of Client",
      text2: "I just wanted to pass on our thanks to you and give recognition to the carer that took special care of Mum on Monday. I know Mum asked the evening carer to write a note in the book, but I promised her that I would contact you directly to pass on our gratitude. She went above and beyond and took initiative and responsibility to request to stay with Mum as needed. Please pass on our personal thanks to her.",
      text3: "Thank you and your wonderful staff for all you do. Knowing Home instead is taking care of my Mum let’s me sleep at night. Thank you for all you do!"
    },
    {
      text1: "Son Of Client",
      text2: 'My father was with a previous agency, so when we felt we had to change would they (Home Instead) deliver on their words? Yes and way more and without doubt on every aspect from support, attitude, genuine care and understanding they have simply been exceptional. I love the file left in the house with their comments to each other and what has been done as in "XX is not himself this morning do check tonight" - and they do and comment. This is great for us visiting a loved one as you get a real feeling of what has been happening and can be totally assured your loved one is being truly well looked after.',
      text3: "So if you were like us looking for someone to provide real loving and supportive care look no further and they really do deliver as they say.",
      text4: "I am sure they would ask what more can we do to improve, and here I really struggle to offer anything constructive .... other than a huge thank you to you all, the amazing carers and the extra helpful team at Head Office.",
    },
    {
      text1: "Daughter of Client",
      text2: "Home Instead have been caring for my 95-year-old Mum for several years. Having found a previous care provider unreliable and unsatisfactory, Home Instead were recommended to me through my GP's surgery. They began by undertaking Mum's personal care and light housework, but more recently as her mobility  decreased, we extended visits to lunchtimes too. This ensured Mum was having a freshly cooked hot meal of her choice every day instead of microwaved meals. At the beginning of February, we are further extending Mum's care to nighttime visits in order to ensure she has supper and gets to bed safely.Home Instead have provided Mum with a wonderful team of CareGivers, who are kind, patient and professional. I know I can rely upon them to treat her with dignity, and that they will act in Mum's best interests, quickly spotting any new health problems, getting the right help on her behalf, and keeping me informed.I highly recommend Home Instead.",
    },
    {
      text1: "Daughter of Client",
      text2: "I am so pleased we made the decision to welcome home instead into my mums house and take over care for mum when my brother and I are unable to. The company as a whole have been very friendly and approachable. The care given to my mum has been fab, improvements have been suggested, help offered and advice given. The fact that mum is allowing her caregiver to bath her is incredible. She is making relationships with the ladies who visit. it was important to us that the number of caregivers was kept to a minimum and this has happened. The visit statements are thorough and full of relevant information. I love the app.",
      text3: "Thanks for all your team do."
    },
    {
      text1: "Hannah- CAREGiver",
      text2: "I've never worked anywhere where you get thanked before! Working with the clients is always a pleasure and all the staff are amazing! I'm really enjoying my job and feel really supported."
    },
    {
      text1: "Family member of Client",
      text2: '"I am so pleased we made the decision to welcome home instead into my mums house and take over care for mum when my brother and I are unable to. The company as a whole have been very friendly and approachable. The care given to my mum has been fab, improvements have been suggested, help offered and advice given. The fact that mum is allowing her caregiver to bath her is incredible. She is making relationships with the ladies who visit. it was important to us that the number of caregivers was kept to a minimum and this has happened. The visit statements are thorough and full of relevant information. I love the app.Thanks for all your team do."',
    },
    {
      text1: "Family Member of a Client",
      text2: "The carers are absolutely brilliant, my wife is a very private person but I don't think that I have heard her laugh as much for a long time. They are punctual, treat my wife with dignity at all times and thoroughly professional. My wife likes all of them without reservation (although she does have her favourites). Everyone at Home Instead has been very supportive of me as well, asking whether I am ok, sleeping/eating ok etc which is great because I think that the primary carer can get forgotten. I believe that the service provided is good value for money. I certainly would not hesitate to recommend them.",
      text3: "Comments from Clients Husband SR",
      text4: "June 2020",
    },
    {
      text1: "Daughter of Client",
      text2: "'I would recommend Home Instead to anyone looking for care for an elderly person.The quality of care given to my father has been excellent. The caregivers are all kind and considerate but at the same time work in a professional way. The rota was constructed in a way that a small number of caregivers visited, so the problem of a different person every day didn’t arise. Communication with the office was always excellent, responses to queries or emails prompt and felt personal.I wish everyone at Home Instead every success'",
    },
    {
      text1: "Daughter of Client",
      text2: "'The Home Instead care team have been amazing with my mum. She has dementia and they have kept persevering with her over the last three months, making sure she takes her medications and cooking her meals. They often send the same few carers so she is now starting to remember them. The carers go above and beyond, despite often being shown the door, (or not getting past it), they keep coming back and are very patient and clever at getting my mum to let them in. The app is a brilliant tool as you can see how a visit has gone and is always quickly updated. They are stars.'",
    },
    {
      text1: "Daughter In Law Of Client",
      text2: '"I have successfully logged onto the app and can see Mum’s notes, it’s really good to be able to keep up to date without needing to ring the office. We are so impressed with the support Home Instead has given, the care and considerate introductions has made a huge difference and I personally feel you have lifted a weight from me".',
      stop: true
    },


  ]

  return (
    <div className='testimonal'>
      <Image image={care_manager_meeting_family} />
      <div className='testimonal_text'>
        <div className='testimonal_text_wrap'>
          <h4>
            “ I was advised to contact Home Instead by an acquaintance at
            our local hospice who had heard good reports of this company,
            and it was the best thing to have happened to me in a long time.
            I am 78 and I don't, unfortunately, have a family, and found caring
            for my husband of 88 quite a hard to undertake due to the ill health
            of both of us. However, I have received support from the carers who
            visit my home, as well as the excellent administrative staff, and I
            couldn't recommend them more highly. Apart from the obvious duties
            they perform so well, I have found genuine care from everyone I have
            encountered at Home Instead, and I no longer feel isolated and frustrated
            as before - and during coronavirus as well! The actual carers are all cheerful,
            and hardworking. It is not like having an employee in my home, more like a friend
            has popped round, and the office staff have also gone the extra mile to assist me. "
          </h4>
          <h5>Client</h5>
          <h6>Client</h6>
        </div>
      </div>

      <div className='testimonal_bnx1'>
        {item.map((i) => (
          <TheamCard {...i} />
        ))}
      </div>

      <div className='testimonal_bnx2'>
        <NavCard Client={caregiver_talking} />
        <NavCard Client={caregiver_smiling} />
      </div>
    </div>
  )
}


