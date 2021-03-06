import React, { useEffect, useState } from 'react';
import { 
  Box,
  Button,
  Card, 
  CardContent, 
  CircularProgress, 
  Container, 
  Link, 
  Typography 
} from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { RatingCard } from './components/RatingCard';
import { SuggestedSchools } from './components/SuggestedSchools';
import { useParams, useLocation } from 'react-router-dom';
import { StatsTable } from './components/StatsTable';
import { HistoricalChart } from './components/HistoricalChart';
import useAxios, { RequestTypes } from '../../services/useAxios';
import './index.css';

interface School {
  id: string;
  name: string;
  address: string;
  slug: string;
  rating: number;
}

export interface NearbySchools {
  id: number;
  nearby: School
  target: string;
}

interface NearbySchoolsCursor {
  next: string;
  previous: string | null;
  results: NearbySchools[];
}

export const Rating: React.FC = () => {
  interface RatingsData {
    overallRating: number;
    overallEarned: number;
    overallAvailable: number;
    growthRating: number;
    growthEarned: number;
    growthAvailable: number;
    achievementRating: number;
    achievementEarned: number;
    achievementAvailable: number;
  }

  interface StatisticsData {
    schoolWebsite: string;
    schoolWebsiteShort: string;
    enrollment: number;
    freeReducedLunch: number;
    minorityStudents: number;
    englishLearners: number;
    disabilityStudents: number;
  }

  interface SchoolData extends School {
    ratings: RatingsData;
    statistics: StatisticsData;
  }

  const [schoolData, setSchoolData] = useState<null|SchoolData>(null);
  const [nearbySchools, setNearbySchools] = useState<NearbySchools[]>([]);

  const location = useLocation();

  interface Params {
    slug: string;
  }
  const { slug } = useParams<Params>();

  useEffect(() => {
    getSchoolData(slug);
    getNearbySchools(slug);
  }, [location]);

  const getSchoolData = async (slug: string) => {
    const response = await useAxios<SchoolData>({
      path: `aggregated/${slug}`,
      method: RequestTypes.Get,
    });

    if (response.status === 200 && response.data) {
      setSchoolData(response.data);
    }
  };

  const getNearbySchools = async (slug: string) => {
    const response = await useAxios<NearbySchoolsCursor>({
      path: 'nearby',
      method: RequestTypes.Get,
      params: {
        search: slug,
      },
    });

    if (response.status === 200 && response.data) {
      setNearbySchools(response.data.results);
    }
  }

  if (!schoolData) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '200px' }}> 
        <CircularProgress size={100} color='primary' />
      </Box>
    )
  }

  return (
    <Container maxWidth="xl">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px', flexWrap: 'wrap' }}>
        <div>
          <h1>{schoolData.name}</h1>
          <Typography variant="subtitle1" component="h2" style={{ marginBottom: '10px' }}>{schoolData.address}</Typography>
        </div>
        <Button 
          variant="contained" 
          endIcon={<ExitToAppIcon />}
          onClick={() => window.open(schoolData.statistics.schoolWebsite)}
        >
          School website
        </Button>
      </div>
      <div style={{ gap: '30px', marginTop: '30px' }} className='flex-container' >
        {/* Column One */}
        <div style={{ display: 'flex', flexFlow: 'column wrap', gap: '20px' }} className='column-one'>
          
          {/* Row One */}
          <div>
            <RatingCard 
                title='Performance Rating'
                rating={schoolData.ratings.overallRating}
                pointsEarned={schoolData.ratings.overallEarned}
                pointsAvailable={schoolData.ratings.overallAvailable}
                majorColor='#2f87fc'
                minorColor='#9ac9f8'
                tooltip='Official performance ratings for schools are based on the overall percentage of points earned across all performance indicators'
                order={1}
            />
          </div>
          
          {/* Row Two */}
          <div style={{ display: 'flex', gap: '20px' }} className='ratings-row-two'>
            <div style={{ display: 'flex', flex: '1 1 50%' }}>
              <RatingCard 
                title={'Growth'} 
                rating={schoolData.ratings.growthRating}
                pointsEarned={schoolData.ratings.growthEarned}
                pointsAvailable={schoolData.ratings.growthAvailable}
                majorColor='#d73f78'
                minorColor='#edc8d9'
                order={2}
                tooltip='Academic growth is the progress students make on state assessments from one year to the next'
                minor
              />
            </div>
            <div style={{ display: 'flex', flex: '1 1 50%' }}>
              <RatingCard 
                title={'Achievement'} 
                rating={schoolData.ratings.achievementRating}
                pointsEarned={schoolData.ratings.achievementEarned}
                pointsAvailable={schoolData.ratings.achievementAvailable}
                majorColor='#474797'
                minorColor='#8a8eca'
                order={3}
                tooltip='Academic achievement measures student performance on state assessments in a given year'
                minor
              />
            </div>
          </div>
          
          {/* Row Three */}
          {/* <div>
            <Card sx={{ order: 4, flex: '1 1 auto' }} raised>
              <CardContent>
                <Typography variant="h6" component="div" gutterBottom> 
                  Historical Academics
                </Typography>
                <HistoricalChart />
              </CardContent>
            </Card>
          </div> */}
        </div> 
        
        {/* Column Two */}
        <div style={{ display: 'flex' }} className='column-two'>
          <Card sx={{ order: 5, flex: '1 1 auto' }} raised>
            <CardContent>
              <Typography variant="h6" component="div"> 
                School Stats
              </Typography>
              <StatsTable 
                schoolWebsite={schoolData.statistics.schoolWebsite}
                schoolWebsiteAbbreviated={schoolData.statistics.schoolWebsiteShort}
                enrollment={schoolData.statistics.enrollment}
                gradesServed='K-5th'
                freeReducedLunch={schoolData.statistics.freeReducedLunch}
                minorityStudents={schoolData.statistics.minorityStudents}
                englishLearners={schoolData.statistics.englishLearners}
                disabilityStudents={schoolData.statistics.disabilityStudents}
              />
            </CardContent>
          </Card>
        </div>
        
        {/* Column Three */}
        <div style={{ display: 'flex' }} className='column-three'>
          <Card sx={{ order: 6, flex: '1 1 auto' }} raised>
            <CardContent>
              <Typography variant="h6" component="div"> 
                Nearby Schools
              </Typography>
              <SuggestedSchools schools={nearbySchools} />
            </CardContent>
          </Card>
        </div>
      </div>
      <Typography variant="body1" style={{ margin: '30px 0 30px 0' }}>Data is from the{' '}
        <Link href="https://www.cde.state.co.us/accountability/performanceframeworks" target="_blank" rel="noopener">
          Colorado Department of Education
        </Link>.
      </Typography>
    </Container>
  )
}