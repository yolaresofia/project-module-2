const mongoose = require('mongoose')
const Exercise = require('../models/Exercise')


mongoose
  .connect('mongodb+srv://milton:mileteas123@cluster0-lduwt.mongodb.net/exersaize?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error('Error connecting to mongo', err);
  });

Exercise.collection.drop();



const AllExercises = [{
    name: 'Arm Circles',
    description: 'Sit on the chair with your back straight, legs bent at the knees 90 degrees and feet planted on the floor. Touch your shoulders, and without moving any other parts of your body, roll your arms backward continuously in a circular motion.',
    type: 'Arms',
    imgPath: 'String',
    element: 'CHAIR',
    intensity: 'Low'
  },{
    name: 'Bent Over With Arm Lift',
    description: 'Sit on the edge of the chair and lean forward while keeping your lower back arched. Your palms should be facing each other. Raise your arms straight out to your side. Pause and then slowly return to the starting position.',
    type: 'Arms',
    imgPath: 'String',
    element: 'CHAIR',
    intensity: 'Low'
  },{
    name: 'Triceps Dip',
    description: 'Put your hands to the edge of the chair, shoulder-width apart. Slide your bottom off the chair and hold yourself up with arms straight. While keeping your back close to the chair, slowly bend at the elbows and go as low as you can. Return to the starting position.',
    type: 'Arms',
    imgPath: 'String',
    element: 'CHAIR',
    intensity: 'Low'
  },{
    name: 'Chair Plank',
    description: 'Place your forearms on the chair, hands touching each other. Extend your legs with your toes on the floor. Contract your abdominal muscles. Make sure that you maintain a straight line from your head to toe without lifting or sinking your hips. Hold.',
    type: 'Arms',
    imgPath: 'String',
    element: 'CHAIR',
    intensity: 'Moderate'
  },{
    name: 'Seated Hip Thrust',
    description: 'Sit on the edge of the chair, with legs bent at the knees 90 degrees and toes touching the floor. Hold the chair or the armrest with your hands for support. Lean back about 45 degrees—or as much as the chair allows. Pull your legs towards your chest. Extend your legs straight out in the air. Pull your legs back again towards your chest, then rop your feet without them touching the floor.',
    type: 'Legs',
    imgPath: 'String',
    element: 'CHAIR',
    intensity: 'Low'
  },{
    name: 'Russian Twist',
    description: 'Sit on the edge of the chair, lift your legs, bend your legs at the knees and lean slightly back without rounding your spine. Bend your arms so your elbows are level with the bottom of your ribcage. Pull your navel in and twist slowly to the left. Inhale and twist to the right.',
    type: 'Core',
    imgPath: 'String',
    element: 'CHAIR',
    intensity: 'Moderate'
  },{
    name: 'Leg Lift',
    description: 'Sit on the edge of the chair, with legs bent at the knees 90 degrees and feet flat on the floor. Hold the chair or the armrest with your hands for support. Lean back, keeping your spine straight. Lift both legs up toward your chest, keeping your legs bent at the knees. Then lower your legs to the floor.',
    type: 'Legs',
    imgPath: 'String',
    element: 'CHAIR',
    intensity: 'Low'
  },{
    name: 'Quick Feet',
    description: 'Sit on the chair with your back straight. Bend your legs at the knees and “run" on the spot with short, quick steps as fast as you can and as long as you can.',
    type: 'Legs',
    imgPath: 'String',
    element: 'CHAIR',
    intensity: 'Moderate'
  },{
    name: 'Chair Squat',
    description: 'Stand in front of the chair with your legs shoulder-width apart. Squat down like you are sitting on the chair but without actually touching it. Maintain a proper position: back straight, knees above the feet, weight on the heels. Keep your hands together, arms bent at the elbows. Straighten your legs to go back to the starting position. ',
    type: 'Legs',
    imgPath: 'String',
    element: 'CHAIR',
    intensity: 'Moderate'
  },{
    name: 'Bulgarian Split Squat',
    description: 'Stand in front of the chair. Put your left foot on the chair behind you. Bend your right leg at the knee until the left knee almost touches the floor. Keep your back straight, arms on the hips. Straighten your right leg and go back to the starting position. Repeat. Change legs.',
    type: 'Legs',
    imgPath: 'String',
    element: 'CHAIR',
    intensity: 'Moderate'
  },{
    name: 'Squat Calf Raise',
    description: 'Stand behind the chair, lightly touching the backrest with your hands. Put your weight on your toes and lower your hips so that your legs are bent at the knees around 90 degrees. Stand on your tiptoes as high as possible without changing the position of your hips or knees and hold it for one second. Lower your heels, then go back to your tiptoes.',
    type: 'Legs',
    imgPath: 'String',
    element: 'CHAIR',
    intensity: 'Moderate'
  },{
    name: 'Bridge kicks',
    description: 'Lay on your back with your knees bent up. Your ankles should be in line with your knees. Place the cushion in between your knees and squeeze to keep it in place. Lift up through the belly button and squeeze the glutes to engage the core. Push your arms and hands down into the ground as you pull your hips upwards. Once you reach your bridge position, keep your glutes engaged as you kick out your left leg. Lower down and repeat on the right side. Make sure you keep your kicks slow and controlled.',
    type: 'Core',
    imgPath: 'String',
    element: 'CUSHION',
    intensity: 'Moderate'
  },{
    name: 'Boat sits',
    description: 'Keep the cushion between your knees and continue to squeeze. Sit up and find a comfortable position. Use your hands for support as you bend your knees into your chest and strengthen them out again. Keep your chest lifted throughout the exercise and pull up and in through the belly button to engage the abdominals.',
    type: 'Core',
    imgPath: 'String',
    element: 'CUSHION',
    intensity: 'Moderate'
  },{
    name: 'Pillow stack crunches',
    description: 'Lay on your back with your knees bent up at a 90-degree angle. Hold onto the cushion and keep your arms straight as you lift your shoulders up off the ground and rest it on your shins. Repeat the same movement as you come back up to collect the cushion. Make sure you engage the abdominals as you come up for the cushion. Breathe in on the down phase of the exercise and breathe out as you come up.',
    type: 'Core',
    imgPath: 'String',
    element: 'CUSHION',
    intensity: 'Moderate'
  },{
    name: 'Dynamic twists',
    description: 'Lay flat on your back with the pillow above your chest and your arms and abs engaged. Pull your knees in toward you and lift up your chest using the power from your abdominals and your hip flexors. Maintain a strong boat position as you twist from the belly to face the left side, then the right. Lower back down to the starting position and repeat. Remember to breathe throughout this exercise.',
    type: 'Core',
    imgPath: 'String',
    element: 'CUSHION',
    intensity: 'High'
  },{
    name: 'Pass throughs',
    description: 'Squeeze the cushion between the hands as you lift your arms and feet up to meet in the middle. Pass the pillow in between your feet and lower back down. Again make sure you keep your core strong throughout this exercise and remember to breathe.',
    type: 'Core',
    imgPath: 'String',
    element: 'CUSHION',
    intensity: 'High'
  },{
    name: 'Cannonball rolls',
    description: 'Place the cushion so it sits at the lower part of your back. Tuck your knees into your chest as you roll back and use the momentum as you come forward and push through your heels to stand. Push your hips forward and engage your glutes as you come to the top.',
    type: 'Legs',
    imgPath: 'String',
    element: 'CUSHION',
    intensity: 'High'
  },{
    name: 'Plank slams',
    description: 'Place the cushion underneath your forearms and rise up into your plank. Pull up through your core, squeeze your quads and push down through your forearms. Aim to keep your hips still as you lift alternating arms and slam them back down into the cushion. Stay strong through the entire movement and remember to breathe.',
    type: 'Cardio',
    imgPath: 'String',
    element: 'CUSHION',
    intensity: 'High'
  },{
    name: 'Single Leg Squat Combo',
    description: 'Begin with your weight in the heel of your right leg. Keep your left leg straight as your raise it off the ground. Brace your core as you sit your bottom towards the couch. As your bottom just touches the couch you will need to use your glute strength to power you back up to standing position. Once you re-reach the top, pivot on your right leg and sink back into a traditional squat. Make sure you keep your chest lifted as you move throughout this exercise.',
    type: 'Legs',
    imgPath: 'String',
    element: 'SOFA',
    intensity: 'Moderate'
  },{
    name: 'Tricep Kicks',
    description: 'Place your palms down on the couch in a comfortable position in close to your body (in line with both hips). Keep your elbows squeezed toward each other and lower down, keeping your back parallel to the couch. Stop when your elbows and shoulders are in one straight line and squeeze it back up. If you begin to feel a pull in your shoulders, you may be going too far down.',
    type: 'Arms',
    imgPath: 'String',
    element: 'SOFA',
    intensity: 'Moderate'
  },{
    name: 'Push-up Climbers',
    description: 'Begin in a push-up position with your hands elevated on the couch and pull up through the belly button as you engage the core. Lead with the chest as you lower down into a push-up, keeping your shoulders in line with your wrists. As you push yourself back up, draw each of your knees in towards the opposite elbow, staying strong and controlled.',
    type: 'Cardio',
    imgPath: 'String',
    element: 'SOFA',
    intensity: 'Moderate'
  },{
    name: 'Sit-back Burpees',
    description: 'Begin in a squatting position and chest lifted as you sit back onto the couch. Rock back and propel yourself forward jumping your feet up and onto couch into the decline plank. Jump back to standing and repeat. Be conscious of your core when performing this exercise and don’t let those hips sag. If you would like to modify this move, one option to consider — step your feet onto the couch rather than jump.',
    type: 'Cardio',
    imgPath: 'String',
    element: 'SOFA',
    intensity: 'High'
  },{
    name: 'Plank Slides in and out',
    description: 'Take your towel, fold it in half horizontally, and place on ground near your feet. Start on all fours, hands on floor shoulder-width apart; then place feet on the towel so you are in a plank. Begin to slide your feet forward, bringing your knees toward your chest and stopping when you feel a full activation of your core. Then push 	your feet back to their starting point.',
    type: 'Core',
    imgPath: 'String',
    element: 'TOWEL',
    intensity: 'Low'
  },{
    name: 'Russian twists',
    description: 'Sit on the floor with knees bent and hold the towel horizontally in your hands. Bend your legs at the knee and begin to elevate your feet slightly off the floor. As you raise your feet, bring your body up into a V-shape. Now, while keeping the towel pulled taught between your hands, twist your body toward the right until your left hand reaches your right knee. Continue to twist side to side with your legs and body elevated. ',
    type: 'Core',
    imgPath: 'String',
    element: 'TOWEL',
    intensity: 'Low'
  },{
    name: 'Wall sits',
    description: ' Hold your towel horizontally straight out in front of your chest. With your back against the wall, place your feet at shoulder-width apart and begin to slide down the wall, until you nestle into a squat position. Sit into your glutes and make sure your knees are away from the wall, and not directly over your feet. ',
    type: 'Legs',
    imgPath: 'String',
    element: 'TOWEL',
    intensity: 'Moderate'
  },{
    name: 'Lunge',
    description: 'Grab your towel at both ends and hold it horizontally in front of your chest with your arms extended. Stand proud with feet shoulder-width apart. Step your right foot forward and when you land on your right foot, begin to bend both knees toward the ground. Lower your hips until both knees are bent at approximately a 90 degree angle (your front knee should hover above the ground). While keeping weight in your heels, push your entire body back up to the starting position. Then repeat using the opposite foot.',
    type: 'Legs',
    imgPath: 'String',
    element: 'TOWEL',
    intensity: 'Moderate'
  },{
    name: 'Plie squat',
    description: 'Grab your towel at both ends and hold it horizontally in front of your chest with arms extended. Place your legs wider than your shoulders and angle your toes outward. Bend at your knees and squat down until they make a 90 degree angle. Then with your towel extended out in front, begin to pulse your arms and body up and down about three to four inches. For a more advanced move, and to challenge your calves, lift your heels and place your weight on the balls of your feet/toes while you pulse.',
    type: 'Legs',
    imgPath: 'String',
    element: 'TOWEL',
    intensity: 'Moderate'
  },{
    name: 'Reverse cross lunges',
    description: 'Grab your towel at both ends and hold horizontally in front of your chest with your arms extended, stand proud with feet shoulder-width apart. Begin to perform a rear lunge by stepping one flexed foot behind your body, lining up your back knee with your front ankle, until both knees reach 90 degree angles. As you do so, keep your arms extended in front and use the resistance from the towel to stabilize yourself as you rotate your torso across the front leg. Then return to your starting position and repeat using the opposite leg. ',
    type: 'Legs',
    imgPath: 'String',
    element: 'TOWEL',
    intensity: 'Moderate'
  },{
    name: 'Hip Bridge with overhead extension',
    description: 'Lie face up on the floor with your knees bent and feet flat on the ground. Extend your arms overhead while holding one end of the towel in each hand. Begin to lift your hips off the ground slowly and as you do so, lift your upper body off the floor, squeezing your abdominals as your rise to your knees. As you raise your body, extend your arms toward your raised hips. Lift your hips off the ground until your knees, hips, and shoulders form a straight line. Once you get there, lower your body slowly to the ground, while your arms return to your extended overhead position.',
    type: 'Legs',
    imgPath: 'String',
    element: 'TOWEL',
    intensity: 'Low'
  },{
    name: 'Stability ball warm up',
    description: 'Begin holding the ball, standing with your feet slightly wider than hip-width apart. Lower into a small squat, tapping the ball lightly to the floor. Stand up, drawing your abs in tightly and keeping your arms extended, raise the ball overhead.',
    type: 'Legs',
    imgPath: 'String',
    element: 'GYM BALL',
    intensity: 'Low'
  },{
    name: 'Atlas squat',
    description: 'Start by standing with feet slightly wider than hip-width apart, holding the ball overhead. Lower into a deep squat, sitting back into your hips and keeping your knees behind your toes while keeping the ball overhead. Avoid straining your neck by keeping your chin pointing toward your chest. Press through your heels to return to the starting position.',
    type: 'Legs',
    imgPath: 'String',
    element: 'GYM BALL',
    intensity: 'Low'
  },{
    name: 'Stability Ball Plank',
    description: 'Begin with your elbows on top of the ball lined up under your shoulders, hands clasped together, feet hip-width apart. Brace your abs and keep your chest and stomach off the ball completely. Write your full name — first, middle and last — with your elbows on top of the ball.',
    type: 'Core',
    imgPath: 'String',
    element: 'GYM BALL',
    intensity: 'Moderate'
  },{
    name: 'Y-and-I Extension',
    description: 'Begin balancing on the ball, with the ball positioned between your chest and pelvis. Your legs should be extended straight back, hip-width apart. Reach your arms into a Y position in front of you, thumbs pointed up. Sweep your arms by your sides into an I position, squeezing your shoulder blades back and together with your thumbs still facing up.',
    type: 'Core',
    imgPath: 'String',
    element: 'GYM BALL',
    intensity: 'Low'
  },{
    name: 'Reaching Rear Lunge',
    description: 'Stand about one foot in front of the ball on your right foot with the top of your left foot pressed into the ball, with hands by your sides. Hinge forward from your hips, bending your right knee as your left leg extends back, moving the ball away from your body. Reach toward the floor with hands on either side of your right leg. Go as low as possible without rounding your back. Press through your right heel to return to the starting position.',
    type: 'Arms',
    imgPath: 'String',
    element: 'GYM BALL',
    intensity: 'Low'
  },{
    name: 'Marching Press',
    description: 'Sit on the ball with feet hip-width apart, arms bent by your sides, with hands at your shoulders, palms facing front. Press the weights overhead. Your arms should be slightly in front of your body at the top of the movement, never behind your head. Lift one foot off the floor, keeping your shoulders stacked over your hips and your trunk level. Return to the starting position.',
    type: 'Arms',
    imgPath: 'String',
    element: 'GYM BALL',
    intensity: 'Low'
  },{
    name: 'Stability Ball Pike',
    description: 'Begin in a high plank with the ball under your feet, shoulders lined up over your hands. Lift your hips and pull the ball in closer to your chest. Try to raise your hips over your shoulders, if possible, and press your feet down into the ball to make it easier to slide your legs in during the pike. Return to start.',
    type: 'Core',
    imgPath: 'String',
    element: 'GYM BALL',
    intensity: 'Moderate'
  },{
    name: 'Balancing Kickback',
    description: 'Stand about one foot in front of the ball on your right foot with the top of your left foot pressed into the ball. Hinge your torso forward from the hips, bending your right knee about 45 degrees as your left leg extends straight back behind your hip, with your hands by your shoulders with your elbows bent. Extend your arms straight back behind you. Bend your elbows back in. That is one rep.',
    type: 'Arms',
    imgPath: 'String',
    element: 'GYM BALL',
    intensity: 'Low'
  },{
    name: 'Stability Ball Push-Up',
    description: 'Begin in a plank with your hands pressed into the ball (think of slightly hugging the ball). Do a push-up by lowering your chest to the ball, bending your elbows out to the side without letting your hips sag. Try to tap your chest on the ball if possible, but do not rest your body on the ball. Return to the starting position.',
    type: 'Arms',
    imgPath: 'String',
    element: 'GYM BALL',
    intensity: 'Moderate'
  },{
    name: 'Stability Ball Hamstring Curl',
    description: 'Begin in a bridge on the ball: Lie face up with your knees bent and hip-width apart, feet flexed, heels pressed into top of the ball. Engage your abs as you press through your heels to lift your hips to form a straight line with your shoulders. Keep your arms extended by your sides and pressed into the  floor. Extend your legs out straight, keeping your hips off the floor. Use your abs and arms to help stabilize your torso. Return to start.',
    type: 'Legs',
    imgPath: 'String',
    element: 'GYM BALL',
    intensity: 'Low'
  },{
    name: 'Stability Ball Stretching',
    description: 'Stand with your feet wide and your arms extended out to the sides, with the ball in front of you on the floor. Bend your knees and hinge forward, placing the back of your right hand on top of the ball and keeping your arms extended, turn your chest toward the ceiling. Roll onto your right shoulder, looking up to your left hand.',
    type: 'Core',
    imgPath: 'String',
    element: 'GYM BALL',
    intensity: 'Low'
  }]

  Exercise.create(AllExercises, (err) => {
    if (err) { throw(err) }
    console.log(`Created ${AllExercises.length} exercises`)
    mongoose.connection.close();
})