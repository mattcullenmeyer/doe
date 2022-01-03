import React from 'react';
import { 
  Link,
  Table, 
  TableBody, 
  TableCell, 
  TableContainer, 
  TableHead, 
  TableRow
} from '@mui/material';

interface StatsTableProps {
  schoolWebsite: string;
  schoolWebsiteAbbreviated: string;
  enrollment: number;
  gradesServed: string;
  freeReducedLunch: number;
  minorityStudents: number;
  englishLearners: number;
  disabilityStudents: number;
}

export const StatsTable: React.FC<StatsTableProps> = ({
  schoolWebsite,
  schoolWebsiteAbbreviated,
  enrollment,
  gradesServed,
  freeReducedLunch,
  minorityStudents,
  englishLearners,
  disabilityStudents,
}) => {
  return (
    <TableContainer>
      <Table>
        <TableBody>
          <TableRow>
            <TableCell>School Website</TableCell>
            <TableCell align="right">
              <Link 
                href={schoolWebsite} 
                target={"_blank"} 
                rel={"noopener"}
              >
                  {schoolWebsiteAbbreviated}
              </Link>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell>2018-19 Enrollment</TableCell>
            <TableCell align="right">{enrollment}</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Grades Served</TableCell>
            <TableCell align="right">{gradesServed}</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell align="center">School</TableCell>
            <TableCell align="center">District</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell>Free/Reduced Lunch</TableCell>
            <TableCell align="center">{`${freeReducedLunch}%`}</TableCell>
            <TableCell align="center">65%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Minority Students</TableCell>
            <TableCell align="center">{`${minorityStudents}%`}</TableCell>
            <TableCell align="center">75%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>English Learners</TableCell>
            <TableCell align="center">{`${englishLearners}%`}</TableCell>
            <TableCell align="center">37%</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Students with Disabilities</TableCell>
            <TableCell align="center">{`${disabilityStudents}%`}</TableCell>
            <TableCell align="center">11%</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
};