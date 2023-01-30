import React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";


type SectionProps = {
  title: string;
  children: JSX.Element[];
};

class ResumeSection extends React.Component<SectionProps> {
  private title: string;

  constructor(props: SectionProps) {
    super(props);
    this.title = props.title;
  }

  public render(): JSX.Element {
    return (
      <>
        <Grid xs={12} sm={3} md={4}>
          <Typography variant="h6">{this.title}</Typography>
        </Grid>

        <Grid xs={12} sm={9} md={8} sx={{
          paddingX: {xs: 1, sm: 4 },
          paddingY: 4,
          borderTop: 'solid 2px gray',
        }} children={this.props.children} />
      </>
    )
  }
}

type Date = `${string} ${number}`;

type AwardProps = {
  title: string;
  issuer: string;
  year: Date | `${Date} - ${Date}`;
  children?: string;
};

class ResumeAward extends React.Component<AwardProps> {
  private title: string;
  private issuer: string;
  private year: string;

  constructor(props: AwardProps) {
    super(props);

    this.title = props.title;
    this.issuer = props.issuer;
    this.year = props.year.toUpperCase();
  }

  public render(): JSX.Element {
    return (
      <>
        <Typography paragraph mb={0}>
          <span style={{ fontWeight: 600 }}>{this.title}</span> / {this.issuer}
        </Typography>

        <Typography variant="subtitle1">
          {this.year}
        </Typography>

        <Typography paragraph sx={{ paddingLeft: { xs: 0, sm: 4 }}}>
          {this.props.children}
        </Typography>
      </>
    );
  }
}

type ListProps = {
  title: string;
  listItems?: string[];
};

class ResumeList extends React.Component<ListProps> {
  private title: string;
  private listItems: string[] | undefined;

  constructor(props: ListProps) {
    super(props);

    this.title = props.title;
    this.listItems = props.listItems;
  }

  public render(): JSX.Element {
    return (
      <>
        <Typography paragraph mb={0} sx={{ fontWeight: 600 }}>
          {this.title}
        </Typography>

        <Typography paragraph sx={{ paddingLeft: { xs: 0, sm: 4 }}}>
          {this.listItems?.join(', ')}
        </Typography>
      </>
    );
  }
}

export default function Resume(): JSX.Element {
  return (
    <Paper elevation={0} sx={{
      padding: { sm: 2, md: 8 },
      boxShadow: { sm: 'none', md: [
        '0px 4px 5px -2px rgba(0,0,0,0.2)',
        '0px 7px 10px 1px rgba(0,0,0,0.14)',
        '0px 2px 16px 1px rgba(0,0,0,0.12)'
      ].join(', ')},
    }}>
      <Grid container spacing={2}>
        <Grid xs={12} sm={6} lg={4}>
          <Typography variant="h4">Shane Davenport</Typography>
          <Typography variant="h5" color="primary">Software Engineer</Typography>
        </Grid>

        <Grid xs={12} sm={6} lg={8} sx={{
          textAlign: { xs: 'left', sm: 'right', lg: 'left' },
          paddingLeft: { xs: 1, sm: 4 },
          paddingBottom: 4,
        }}>
          <Typography paragraph>example@email.com</Typography>
          <Typography paragraph>(555) 555-5555</Typography>
          <Typography paragraph>San Tan Valley, AZ 85143</Typography>
        </Grid>

        <ResumeSection title="Education">
          <ResumeAward title="Brigham Young University — Idaho" 
            issuer="Bachelor of Science in Software Engineering, Minor in Computer Information Technology"
            year="AUGUST 2016 - MARCH 2021" />
          <ResumeAward title="Brigham Young University — Idaho"
            issuer="Associates of Applied Science in Computer Programming"
            year="AUGUST 2016 - MARCH 2018" />
        </ResumeSection>

        <ResumeSection title="Skills & Technology">
          <ResumeList title="Languages and Frameworks" listItems={[
            'C++', 'Java', 'Python', 'HTML', 'CSS', 'JavaScript',
            'TypeScript', 'ExpressJS', 'React', 'React Native', 'PHP',
            'SQL', 'Dart', 'Flutter', 'Rust', 'Kotlin', 'Swift',
          ]} />

          <ResumeList title="Design, Framework, and IDE Tools" listItems={[
            'PyCharm', 'Visual Studio', 'Visual Studio Code',
            'Azure Data Studio', 'SQL Server Management Studio', 'IntelliJ',
            'Android Studio', 'Xcode', 'Figma',
          ]} />

          <ResumeList title="Core Concepts and Methodologies" listItems={[
              'Agile development', 'Data structures & algorithms',
              'Machine learning and AI concepts', 'Networking',
              'Data mining', 'Computer security',
          ]} />
        </ResumeSection>

        <ResumeSection title="Awards & Certificates">
          <ResumeAward title="TensorFlow Developer" issuer="Google and DeepLearning.AI" year="JANUARY 2021">
            Developed the skills necessary to build and train powerful machine learning models with TensorFlow.
          </ResumeAward>

          <ResumeAward title="Programming — Computer Science" issuer="Brigham Young University — Idaho" year="MARCH 2020">
            Learned to accomplish meaningful tasks and prepare to enter the computer programming job field.
          </ResumeAward>

          <ResumeAward title="Eagle Scout" issuer="Boy Scouts of America, Troop 186" year="August 2010 - December 2015">
            Organized and marketed fundraiser to raise donations for Christmas gifts for underprivileged children.
          </ResumeAward>
        </ResumeSection>
      </Grid>
    </Paper>
  );
}