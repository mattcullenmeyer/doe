import React, { useEffect } from 'react';
import { 
  Card, 
  CardContent, 
  Container, 
  Typography 
} from '@mui/material';
import { RatingCard } from './components/RatingCard';
import { School, SuggestedSchools } from './components/SuggestedSchools';
import { useParams, useLocation } from 'react-router-dom';
import { StatsTable } from './components/StatsTable';
import { HistoricalChart } from './components/HistoricalChart';

const schools: School[] = [
  {
    uid: 6957,
    slug: 'university-prep-steel-st',
    name: "University Prep - Steele St.",
    address: "3230 East 38th Avenue Denver, CO 80205",
    rating: 53.0,
  },
  {
    uid: 8945,
    slug: 'university-prep-arapahoe-st',
    name: "University Prep - Arapahoe St.",
    address: "2409 Arapahoe Street Denver, CO 80205",
    rating: 71.8,
  },
  {
    uid: 3778,
    slug: 'international-academy-denver-harrington',
    name: "International Academy of Denver at Harrington",
    address: "2401 East 37th Avenue Denver, CO 80205",
    rating: 50.7,
  },
  {
    uid: 1846,
    slug: 'columbine-elementary-school',
    name: "Columbine Elementary School",
    address: "2540 East 29th Ave Denver, CO 80205",
    rating: 43.2,
  }
];

export const Rating: React.FC = () => {
  const location = useLocation();

  interface Params {
    slug: string;
  }

  const { slug } = useParams<Params>();

  useEffect(() => {
    console.log(`location changed to ${slug}`);
  }, [location])

  return (
    <Container maxWidth="xl">
      <Typography variant="h4" component="h1">Wyatt Academy</Typography>
      <Typography variant="subtitle1" gutterBottom component="h2">3620 Franklin Street Denver, CO 80205</Typography>
      <div style={{ display: 'flex', gap: '30px', marginTop: '30px' }}>
        {/* Column One */}
        <div style={{ display: 'flex', flex: '1 1 40%', flexFlow: 'column wrap', gap: '20px' }}>
          
          {/* Row One */}
          <div>
            <RatingCard 
                title='Performance Rating'
                rating={77.7}
                pointsEarned={77.7}
                pointsAvailable={100}
                majorColor='#2f87fc'
                minorColor='#9ac9f8'
                order={1}
            />
          </div>
          
          {/* Row Two */}
          <div style={{ display: 'flex', flex: '1 1 auto', gap: '20px' }}>
            <div style={{ display: 'flex', flex: '1 1 50%' }}>
              <RatingCard 
                title={'Academic Growth'} 
                rating={96.2}
                pointsEarned={57.7}
                pointsAvailable={60}
                majorColor='#d73f78'
                minorColor='#edc8d9'
                order={2}
                minor
              />
            </div>
            <div style={{ display: 'flex', flex: '1 1 50%' }}>
              <RatingCard 
                title={'Academic Achievement'} 
                rating={50.0}
                pointsEarned={20.0}
                pointsAvailable={40}
                majorColor='#474797'
                minorColor='#8a8eca'
                order={3}
                minor
              />
            </div>
          </div>
          
          {/* Row Three */}
          <div>
            <Card sx={{ order: 4, flex: '1 1 auto' }} raised>
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom> 
                  Historical Academics
                </Typography>
                <HistoricalChart />
              </CardContent>
            </Card>
          </div>
        </div> 
        
        {/* Column Two */}
        <div style={{ display: 'flex', flex: '1 1 30%' }}>
          <Card sx={{ order: 5, flex: '1 1 auto' }} raised>
            <CardContent>
              <Typography variant="h6" component="div"> 
                School Stats
              </Typography>
              <StatsTable 
                schoolWebsite='https://www.wyattacademy.org/'
                schoolWebsiteAbbreviated='wyattacademy.org'
                enrollment={189}
                gradesServed='K-5th'
                freeReducedLunch={96}
                minorityStudents={95}
                englishLearners={51}
                disabilityStudents={6}
              />
            </CardContent>
          </Card>
        </div>
        
        {/* Column Three */}
        <div style={{ display: 'flex', flex: '1 1 30%' }}>
          <Card sx={{ order: 6, flex: '1 1 auto' }} raised>
            <CardContent>
              <Typography variant="h6" component="div"> 
                Suggested Schools
              </Typography>
              <SuggestedSchools schools={schools} />
            </CardContent>
          </Card>
        </div>
      </div>
    </Container>
  )
}