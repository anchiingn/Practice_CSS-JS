
gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function() {
    //transition text
    gsap.to('.t_one', {
        x: 700,
        duration: 4,
        scrollTrigger: {
            trigger: '.t_one',
            start: 'top center',
            end: 'bottom center', 
            scrub: true,
            markers: false
        }
    })

    gsap.to('.t_two', {
        x: -1000,
        duration: 10,
        scrollTrigger: {
            trigger: '.t_one',
            start: 'top center',
            end: 'bottom center', 
            scrub: true,
            markers: true
        }
    })

    //highlight single char text
    // const smallSQ = document.querySelector('.small_sq');    
    // const text = smallSQ.textContent
    // smallSQ.innerHTML = ''


    // for (let i = 0; i < text.length; i++) {
    //     const char = document.createElement('span')
    //     char.textContent = text[i]
    //     smallSQ.appendChild(char)
    //     if (char.innerHTML === 'o') {
    //         console.log(char)
    //         char.style.color = 'red'
    //     }
    // }


    //reveal text  useSplitType from U
    const reveal = document.querySelectorAll('.reveal')
    reveal.forEach((char, i) => {
        const text = new SplitType(char, {type:'chars'})
        
        gsap.from(text.chars, {
            opacity:0.2,
            stagger:0.1,
            scrollTrigger:{
                trigger: char,
                start: 'top 80%',
                end: 'top 20%',
                scrub: true,
                markers: true
            }
        })
    })

    
  });