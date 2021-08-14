import React, { forwardRef } from 'react';
import { makeStyles } from '@material-ui/styles';
import ImageSlider from './ImageSlider';

const OurTeam = (props, ref) => {
  const classes = useStyles();

  return (
    <section ref={ref} className={classes.team}>
      <ImageSlider slides={members} />
    </section>
  );
}

const members = [
  {
    img: '/members/member1.png',
    name: 'Giorgi Giorgadze',
    position: 'Graphic Design',
  },
  {
    img: '/members/member3.png',
    name: 'Eka Shanidze',
    position: 'CEO',
  },
  {
    img: '/members/member2.png',
    name: 'Giorgi Giorgadze',
    position: 'Web Developer',
  },
  {
    img: '/members/member1.png',
    name: 'Giorgi Giorgadze',
    position: 'Graphic Design',
  },
  {
    img: '/members/member3.png',
    name: 'Eka Shanidze',
    position: 'CEO',
  },
  {
    img: '/members/member2.png',
    name: 'Giorgi Giorgadze',
    position: 'Web Developer',
  },


]


const useStyles = makeStyles((theme) => ({
  team: {
    marginTop: 50,
  },
}));

export default forwardRef(OurTeam);
